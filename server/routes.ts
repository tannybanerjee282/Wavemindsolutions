import { z } from 'zod';
import { insertContactMessageSchema } from './schema';

/* -----------------------------
   Common error schemas
-------------------------------- */
export const errorSchemas = {
  validation: z.object({
    message: z.string(),
    field: z.string().optional(),
  }),
  internal: z.object({
    message: z.string(),
  }),
};

/* -----------------------------
   API route definitions
-------------------------------- */
export const api = {
  contact: {
    submit: {
      method: 'POST',
      path: '/contact',
      input: insertContactMessageSchema,
      response: z.object({
        success: z.boolean(),
      }),
      errors: {
        400: errorSchemas.validation,
        500: errorSchemas.internal,
      },
    },
  },
} as const;

/* -----------------------------
   Helper: build URL with params
-------------------------------- */
export function buildUrl(
  path: string,
  params?: Record<string, string | number>
): string {
  let url = path;

  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      url = url.replace(`:${key}`, String(value));
    });
  }

  return url;
}

/* -----------------------------
   Inferred types
-------------------------------- */
export type ContactMessageInput =
  z.infer<typeof api.contact.submit.input>;
