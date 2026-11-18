import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters.")
    .max(100, "Name must be under 100 characters."),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address.")
    .max(200, "Email must be under 200 characters."),
  subject: z
    .string()
    .trim()
    .min(3, "Subject must be at least 3 characters.")
    .max(150, "Subject must be under 150 characters."),
  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters.")
    .max(2000, "Message must be under 2000 characters."),
  website: z.string().max(0, "Spam detected.").optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;
