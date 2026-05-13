import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function getResendErrorMessage(errorBody: unknown) {
  if (
    typeof errorBody === "object" &&
    errorBody !== null &&
    "message" in errorBody &&
    typeof errorBody.message === "string"
  ) {
    return errorBody.message;
  }

  if (
    typeof errorBody === "object" &&
    errorBody !== null &&
    "error" in errorBody &&
    typeof errorBody.error === "string"
  ) {
    return errorBody.error;
  }

  return "Failed to send message. Please try again later.";
}

export async function POST(request: Request) {
  const { name, email, subject, message } =
    (await request.json()) as ContactPayload;

  const trimmedName = name?.trim();
  const trimmedEmail = email?.trim();
  const trimmedSubject = subject?.trim();
  const trimmedMessage = message?.trim();

  if (!trimmedName || !trimmedEmail || !trimmedSubject || !trimmedMessage) {
    return NextResponse.json(
      { message: "Please fill in all fields." },
      { status: 400 },
    );
  }

  if (!emailPattern.test(trimmedEmail)) {
    return NextResponse.json(
      { message: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      { message: "Email service is not configured yet." },
      { status: 500 },
    );
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from:
          process.env.CONTACT_FROM_EMAIL ||
          "Portfolio Contact <onboarding@resend.dev>",
        to: process.env.CONTACT_TO_EMAIL || "mufauzan18@gmail.com",
        reply_to: trimmedEmail,
        subject: `Portfolio Contact: ${trimmedSubject}`,
        text: [
          `Name: ${trimmedName}`,
          `Email: ${trimmedEmail}`,
          `Subject: ${trimmedSubject}`,
          "",
          trimmedMessage,
        ].join("\n"),
      }),
    });

    if (!response.ok) {
      const errorBody = (await response.json().catch(() => null)) as unknown;
      const resendMessage = getResendErrorMessage(errorBody);

      return NextResponse.json(
        { message: `Resend error: ${resendMessage}` },
        { status: response.status },
      );
    }

    return NextResponse.json({ message: "Message sent." });
  } catch (error) {
    console.error("Contact form email error:", error);

    return NextResponse.json(
      { message: "Failed to send message. Please try again later." },
      { status: 502 },
    );
  }
}
