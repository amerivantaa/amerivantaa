import { describe, expect, it, vi } from "vitest";
import { inquirySchema, submitInquiry, type Inquiry } from "@/lib/inquiry";

const valid: Inquiry = {
  fullName: "Jordan Lee",
  email: "jordan@company.com",
  company: "Example Co",
  service: "Cloud Solutions and DevOps",
  message: "We need help migrating our platform to the cloud this year.",
};

describe("inquiry form rules", () => {
  it("accepts a complete inquiry", () => {
    expect(inquirySchema.safeParse(valid).success).toBe(true);
  });

  it("rejects an invalid business email", () => {
    expect(inquirySchema.safeParse({ ...valid, email: "not-an-email" }).success).toBe(false);
  });

  it("requires a service to be chosen", () => {
    expect(inquirySchema.safeParse({ ...valid, service: "" }).success).toBe(false);
  });

  it("requires a message of at least 20 characters", () => {
    expect(inquirySchema.safeParse({ ...valid, message: "Too short" }).success).toBe(false);
  });

  it("does not pretend to send when no service is connected", async () => {
    const fetcher = vi.fn();
    await expect(submitInquiry(valid, "", fetcher as unknown as typeof fetch)).resolves.toEqual({
      status: "not-configured",
    });
    expect(fetcher).not.toHaveBeenCalled();
  });

  it("reports an error when the endpoint fails", async () => {
    const fetcher = vi.fn().mockResolvedValue({ ok: false, status: 500 });
    const res = await submitInquiry(valid, "https://example.test/inquiry", fetcher as unknown as typeof fetch);
    expect(res.status).toBe("error");
  });
});
