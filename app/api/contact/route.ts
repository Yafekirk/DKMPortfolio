import { checkRateLimit, getClientIp } from "@/lib/rate-limit";
import { contactSchema } from "@/lib/validations";
import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const ip = getClientIp(request);
    const rate = checkRateLimit({
      key: `contact:${ip}`,
      limit: 5,
      windowMs: 60_000,
    });

    if (!rate.allowed) {
      return NextResponse.json(
        {
          message:
            "Too many contact attempts. Please wait a minute and try again.",
        },
        {
          status: 429,
          headers: {
            "Retry-After": String(rate.retryAfterSeconds),
          },
        },
      );
    }

    const body = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          message: "Invalid form data.",
          errors: parsed.error.flatten().fieldErrors,
        },
        { status: 400 },
      );
    }

    if (parsed.data.website) {
      return NextResponse.json(
        { message: "Message sent successfully." },
        { status: 200 },
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const contactEmail = process.env.CONTACT_EMAIL;
    const fromEmail = process.env.FROM_EMAIL;

    if (!apiKey || !contactEmail || !fromEmail) {
      return NextResponse.json(
        {
          message:
            "Contact form is not configured yet. Add RESEND_API_KEY, CONTACT_EMAIL, and FROM_EMAIL to your environment variables.",
        },
        { status: 503 },
      );
    }

    const resend = new Resend(apiKey);
    const { name, email, subject, message } = parsed.data;

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: contactEmail,
      replyTo: email,
      subject: `[DKM Portfolio] ${subject}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Subject: ${subject}`,
        "",
        message,
      ].join("\n"),
    });

    if (error) {
      return NextResponse.json(
        { message: "Failed to deliver your message. Please try again later." },
        { status: 502 },
      );
    }

    return NextResponse.json(
      { message: "Message sent successfully. Thank you for reaching out!" },
      { status: 200 },
    );
  } catch {
    return NextResponse.json(
      { message: "Unexpected server error. Please try again later." },
      { status: 500 },
    );
  }
}
