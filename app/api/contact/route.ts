import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const DESTINATION_EMAIL = "cristiancorrales.datos@gmail.com";

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof message !== "string" ||
      !name.trim() ||
      !email.trim() ||
      !message.trim()
    ) {
      return NextResponse.json(
        { error: "Todos los campos son obligatorios." },
        { status: 400 }
      );
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      return NextResponse.json(
        { error: "Correo inválido." },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: "El servidor no tiene configurada la variable RESEND_API_KEY." },
        { status: 500 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const { error } = await resend.emails.send({
      from: "CrisCor Portfolio <onboarding@resend.dev>",
      to: DESTINATION_EMAIL,
      reply_to: email,
      subject: `Nuevo mensaje de ${name} — CrisCor Portfolio`,
      text: `Nombre: ${name}\nCorreo: ${email}\n\nMensaje:\n${message}`,
    });

    if (error) {
      return NextResponse.json({ error: "No se pudo enviar el correo." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Solicitud inválida." },
      { status: 400 }
    );
  }
}
