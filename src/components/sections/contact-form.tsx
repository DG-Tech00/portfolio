"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactFormData, contactFormSchema } from "@/lib/validations/contact";
import { EmailService } from "@/services/email.service";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    try {
      await EmailService.sendContactEmail(data);

      toast.success("Mensagem enviada com sucesso!", {
        description: "Entrarei em contato em breve.",
      });

      reset();
    } catch (error) {
      toast.error("Erro ao enviar mensagem", {
        description:
          error instanceof Error ? error.message : "Tente novamente.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <Input
        label="Nome *"
        {...register("name")}
        error={errors.name?.message}
        disabled={isSubmitting}
        autoComplete="name"
        placeholder="Seu nome completo"
      />

      <Input
        label="Email *"
        type="email"
        {...register("email")}
        error={errors.email?.message}
        disabled={isSubmitting}
        autoComplete="email"
        placeholder="seu@email.com"
      />

      <Textarea
        label="Mensagem *"
        {...register("message")}
        error={errors.message?.message}
        disabled={isSubmitting}
        rows={5}
        placeholder="Digite sua mensagem..."
      />

      <Button
        type="submit"
        className="w-full"
        isLoading={isSubmitting}
        disabled={isSubmitting}
      >
        {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
      </Button>
    </form>
  );
}
