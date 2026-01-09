import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";
import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post(api.contact.submit.path, async (req, res) => {
    try {
      const input = api.contact.submit.input.parse(req.body);
      const message = await storage.createContactMessage(input);

      // Send email notification if Resend is configured
      if (resend) {
        try {
          console.log("Resend API Key status:", process.env.RESEND_API_KEY ? "Present" : "Missing");
          console.log("Attempting to send email via Resend to info@wavemindsolutions.in...");
          
          const { data, error } = await resend.emails.send({
            from: "WaveMind Website <onboarding@resend.dev>",
            to: "info@wavemindsolutions.in",
            subject: `New Inquiry from ${input.firstName}`,
            text: `Name: ${input.firstName} ${input.lastName}\nCompany: ${input.companyName}\nCountry: ${input.country}\nMessage: ${input.message}`,
            html: `
              <div style="font-family: sans-serif; padding: 20px; color: #333;">
                <h2 style="color: #1034a6;">New Inquiry: ${input.firstName} ${input.lastName}</h2>
                <p><strong>Company:</strong> ${input.companyName}</p>
                <p><strong>Country:</strong> ${input.country}</p>
                <p><strong>Message:</strong></p>
                <div style="background: #f4f4f4; padding: 15px; border-radius: 5px;">
                  ${input.message}
                </div>
                <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
                <p style="font-size: 12px; color: #999;">Sent from wavemindsolutions.in contact form</p>
              </div>
            `,
          });

          if (error) {
            console.error("Resend API Error Detail:", JSON.stringify(error, null, 2));
          } else {
            console.log("Email sent successfully! ID:", data?.id);
          }
        } catch (emailError: any) {
          console.error("Fatal Email Exception:", emailError);
          if (emailError.response) {
            console.error("Email Error Response:", emailError.response.data);
          }
        }
      }

      res.status(201).json(message);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  return httpServer;
}
