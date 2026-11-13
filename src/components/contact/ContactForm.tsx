import { zodResolver } from "@hookform/resolvers/zod";
import { AlertCircle, ArrowRight, CheckCircle2, Info, Loader2 } from "lucide-react";
import { useState, type ReactNode } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { serviceOptions } from "@/content/site";
import { inquirySchema, submitInquiry, type Inquiry, type InquiryResult } from "@/lib/inquiry";
import { cn } from "@/lib/utils";

const fieldCls =
  "block w-full rounded-md border border-input bg-background px-4 py-3 text-[0.95rem] text-foreground transition-[border-color,box-shadow] duration-300 placeholder:text-muted-foreground/70 hover:border-foreground/40 focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/15 aria-[invalid=true]:border-destructive";

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string | undefined;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-[0.85rem] font-medium">
        {label} <span aria-hidden className="text-accent">*</span>
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-2 flex items-center gap-1.5 text-[0.8rem] text-destructive">
          <AlertCircle className="size-3.5" />
          {error}
        </p>
      )}
    </div>
  );
}

function StatusBanner({ result, onReset }: { result: InquiryResult; onReset: () => void }) {
  if (result.status === "sent") {
    return (
      <div role="status" className="flex gap-4 rounded-md border border-success/30 bg-success/5 p-6">
        <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-success" />
        <div>
          <p className="font-semibold">Thank you — your inquiry has been sent.</p>
          <p className="mt-1 text-[0.9rem] text-muted-foreground">Our team will review it and get back to you.</p>
          <button type="button" onClick={onReset} className="link-underline mt-4 text-[0.85rem] font-medium text-accent">
            Send another inquiry
          </button>
        </div>
      </div>
    );
  }
  if (result.status === "not-configured") {
    return (
      <div role="status" className="flex gap-4 rounded-md border border-accent/30 bg-blue-soft/50 p-6">
        <Info className="mt-0.5 size-5 shrink-0 text-accent" />
        <div>
          <p className="font-semibold">Your details look good — but this form isn't connected yet.</p>
          <p className="mt-1 text-[0.9rem] text-muted-foreground">
            Inquiries are not delivered until an email or backend service is connected. Nothing was sent.
          </p>
          <button type="button" onClick={onReset} className="link-underline mt-4 text-[0.85rem] font-medium text-accent">
            Back to the form
          </button>
        </div>
      </div>
    );
  }
  return null;
}

export function ContactForm() {
  const [result, setResult] = useState<InquiryResult | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<Inquiry>({
    resolver: zodResolver(inquirySchema),
    defaultValues: { fullName: "", email: "", company: "", service: "", message: "" },
  });

  const onSubmit = async (data: Inquiry) => {
    setResult(null);
    const res = await submitInquiry(data);
    setResult(res);
    if (res.status === "sent") reset();
  };

  if (result && result.status !== "error") {
    return <StatusBanner result={result} onReset={() => setResult(null)} />;
  }

  const a = (name: keyof Inquiry) => ({
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": errors[name] ? `${name}-error` : undefined,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6" aria-label="Project inquiry">
      <div className="grid gap-6 sm:grid-cols-2">
        <Field id="fullName" label="Full Name" error={errors.fullName?.message}>
          <input id="fullName" autoComplete="name" className={fieldCls} {...a("fullName")} {...register("fullName")} />
        </Field>
        <Field id="email" label="Business Email" error={errors.email?.message}>
          <input id="email" type="email" autoComplete="email" className={fieldCls} {...a("email")} {...register("email")} />
        </Field>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <Field id="company" label="Company Name" error={errors.company?.message}>
          <input id="company" autoComplete="organization" className={fieldCls} {...a("company")} {...register("company")} />
        </Field>
        <Field id="service" label="Service Interested In" error={errors.service?.message}>
          <select id="service" className={cn(fieldCls, "appearance-none bg-[length:12px] bg-[right_1rem_center] bg-no-repeat pr-10")} style={{ backgroundImage: "var(--select-chevron)" }} {...a("service")} {...register("service")}>
            <option value="">Select a service…</option>
            {serviceOptions.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </Field>
      </div>
      <Field id="message" label="Message" error={errors.message?.message}>
        <textarea
          id="message"
          rows={6}
          placeholder="Tell us about your challenge, goals and timeline."
          className={cn(fieldCls, "resize-y")}
          {...a("message")}
          {...register("message")}
        />
      </Field>

      {result?.status === "error" && (
        <div role="alert" className="flex gap-3 rounded-md border border-destructive/30 bg-destructive/5 p-4 text-[0.9rem]">
          <AlertCircle className="mt-0.5 size-4 shrink-0 text-destructive" />
          <p>
            <span className="font-semibold">Your inquiry wasn't sent.</span> {result.message}
          </p>
        </div>
      )}

      <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[0.8rem] text-muted-foreground">All fields are required.</p>
        <Button type="submit" size="lg" disabled={isSubmitting} aria-busy={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="animate-spin" /> Sending…
            </>
          ) : (
            <>
              Send Inquiry <ArrowRight className="transition-transform duration-300 group-hover/btn:translate-x-1" />
            </>
          )}
        </Button>
      </div>
    </form>
  );
}
