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
            from: "WaveMind Solutions <onboarding@resend.dev>",
            to: "info@wavemindsolutions.in",
            replyTo: input.firstName + " " + input.lastName + " <" + (input.firstName.toLowerCase() + "@wavemindsolutions.in") + ">",
            subject: `Website Inquiry: ${input.firstName} ${input.lastName}`,
            html: `
              <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #eee; border-radius: 10px; padding: 20px;">
                <h2 style="color: #1e293b; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">New Contact Message</h2>
                <div style="margin-top: 20px;">
                  <p><strong>Sender Name:</strong> ${input.firstName} ${input.lastName}</p>
                  <p><strong>Company:</strong> ${input.companyName}</p>
                  <p><strong>Country:</strong> ${input.country}</p>
                  <div style="background-color: #f8fafc; padding: 15px; border-radius: 5px; margin-top: 20px;">
                    <p><strong>Message:</strong></p>
                    <p style="color: #475569;">${input.message}</p>
                  </div>
                </div>
                <footer style="margin-top: 30px; font-size: 0.8em; color: #94a3b8; text-align: center;">
                  <p>This message was sent from the WaveMind Solutions website contact form.</p>
                </footer>
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
