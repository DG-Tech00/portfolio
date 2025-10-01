import emailjs from "@emailjs/browser";
import { ContactFormData } from "@/lib/validations/contact";

const EMAILJS_CONFIG = {
  SERVICE_ID: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
  TEMPLATE_ID: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
  PUBLIC_KEY: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
};

export class EmailService {
  static async sendContactEmail(data: ContactFormData): Promise<void> {
    try {
      const result = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        {
          user_name: data.name,
          user_email: data.email,
          message: data.message,
        },
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      if (result.status !== 200) {
        throw new Error("Falha ao enviar email");
      }
    } catch (error) {
      console.error("Erro ao enviar email:", error);
      throw new Error(
        "Não foi possível enviar sua mensagem. Por favor, tente novamente."
      );
    }
  }
}
