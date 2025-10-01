import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(1, "Nome é obrigatório")
    .min(5, "Nome deve ter pelo menos 5 caracteres")
    .max(60, "Nome deve ter no máximo 60 caracteres")
    .regex(/^[a-zA-ZÀ-ÿ\s]+$/, "Nome deve conter apenas letras"),
  email: z
    .string()
    .min(1, "Email é obrigatório")
    .email("Email inválido")
    .toLowerCase(),
  message: z
    .string()
    .min(1, "Mensagem é obrigatória")
    .min(10, "Mensagem deve ter pelo menos 10 caracteres")
    .max(1000, "Mensagem deve ter no máximo 1000 caracteres"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
