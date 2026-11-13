import { z } from "zod";

export const inquirySchema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name.").max(100),
  email: z
    .string()
    .trim()
    .min(1, "Please enter your business email.")
    .email("Please enter a valid email address.")
    .max(255),
  company: z.string().trim().min(1, "Please enter your company name.").max(120),
  service: z.string().trim().min(1, "Please choose a service."),
  message: z
    .string()
    .trim()
    .min(20, "Please share a few more details (at least 20 characters).")
    .max(2000, "Please keep your message under 2000 characters."),
});

export type Inquiry = z.infer<typeof inquirySchema>;

export type InquiryResult =
  | { status: "sent" }
  | { status: "not-configured" }
  | { status: "error"; message: string };

/**
 * Integration point for inquiries.
 * Set VITE_INQUIRY_ENDPOINT to a URL that accepts a JSON POST (your backend,
 * a form service, or an email-sending function). Until then, submissions are
 * validated but NOT delivered, and the form says so clearly.
 */
export async function submitInquiry(
  data: Inquiry,
  endpoint: string | undefined = import.meta.env["VITE_INQUIRY_ENDPOINT"] as string | undefined,
  fetcher: typeof fetch = fetch,
): Promise<InquiryResult> {
  if (!endpoint) return { status: "not-configured" };
  try {
    const res = await fetcher(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!res.ok) {
      return { status: "error", message: `The server responded with ${res.status}.` };
    }
    return { status: "sent" };
  } catch {
    return { status: "error", message: "We couldn't reach the server. Please try again." };
  }
}
