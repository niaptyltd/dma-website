"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { FormFeedback } from "@/components/site/forms/form-feedback";
import { FormField } from "@/components/site/forms/form-field";
import { useFormSubmission } from "@/components/site/forms/use-form-submission";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  preferredContactMethods,
  quoteBudgetRanges,
  quoteEventTypes,
  serviceOptionList
} from "@/lib/site";
import { quoteRequestSchema, type QuoteRequestInput } from "@/lib/site-schemas";

export function QuoteRequestForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<QuoteRequestInput>({
    resolver: zodResolver(quoteRequestSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      preferredContactMethod: "Email",
      eventType: "",
      eventDate: "",
      venueLocation: "",
      estimatedGuests: 100,
      budgetRange: "",
      requiredServices: [],
      message: ""
    }
  });

  const { submit, errorMessage, successMessage, isSubmitting } = useFormSubmission("quoteRequest");

  return (
    <form
      className="grid gap-5"
      onSubmit={handleSubmit(async (values) => {
        const ok = await submit(values);

        if (ok) {
          reset();
        }
      })}
    >
      <div className="grid gap-5 md:grid-cols-2">
        <FormField error={errors.name?.message} htmlFor="quote-name" label="Full name">
          <Input id="quote-name" placeholder="Your name" {...register("name")} />
        </FormField>
        <FormField error={errors.company?.message} htmlFor="quote-company" label="Company">
          <Input id="quote-company" placeholder="Company or organisation" {...register("company")} />
        </FormField>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <FormField error={errors.email?.message} htmlFor="quote-email" label="Email">
          <Input id="quote-email" placeholder="name@example.com" type="email" {...register("email")} />
        </FormField>
        <FormField error={errors.phone?.message} htmlFor="quote-phone" label="Phone">
          <Input id="quote-phone" placeholder="+27 ..." {...register("phone")} />
        </FormField>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        <FormField error={errors.eventType?.message} htmlFor="quote-event-type" label="Event type">
          <Select id="quote-event-type" {...register("eventType")}>
            <option value="">Select event type</option>
            {quoteEventTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </Select>
        </FormField>
        <FormField error={errors.eventDate?.message} htmlFor="quote-date" label="Date">
          <Input id="quote-date" type="date" {...register("eventDate")} />
        </FormField>
        <FormField error={errors.estimatedGuests?.message} htmlFor="quote-guests" label="Estimated guests">
          <Input id="quote-guests" min={1} type="number" {...register("estimatedGuests", { valueAsNumber: true })} />
        </FormField>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <FormField error={errors.venueLocation?.message} htmlFor="quote-location" label="Venue or location">
          <Input id="quote-location" placeholder="Venue name or town" {...register("venueLocation")} />
        </FormField>
        <FormField error={errors.budgetRange?.message} htmlFor="quote-budget" label="Budget range">
          <Select id="quote-budget" {...register("budgetRange")}>
            <option value="">Select a budget range</option>
            {quoteBudgetRanges.map((range) => (
              <option key={range} value={range}>
                {range}
              </option>
            ))}
          </Select>
        </FormField>
      </div>

      <fieldset className="grid gap-3 rounded-[1.5rem] border border-black/10 bg-white/60 p-5">
        <legend className="px-2 text-sm font-semibold text-brand-ink">Required services</legend>
        <div className="grid gap-3 md:grid-cols-2">
          {serviceOptionList.map((service) => (
            <label className="flex items-start gap-3 text-sm text-brand-ink" key={service}>
              <input
                className="mt-1 h-4 w-4 rounded border-black/20 text-black focus:ring-black"
                type="checkbox"
                value={service}
                {...register("requiredServices")}
              />
              <span>{service}</span>
            </label>
          ))}
        </div>
        <p className="min-h-5 text-xs text-rose-700">{errors.requiredServices?.message ?? ""}</p>
      </fieldset>

      <div className="grid gap-5 md:grid-cols-2">
        <FormField error={errors.preferredContactMethod?.message} htmlFor="quote-method" label="Preferred contact method">
          <Select id="quote-method" {...register("preferredContactMethod")}>
            {preferredContactMethods.map((method) => (
              <option key={method} value={method}>
                {method}
              </option>
            ))}
          </Select>
        </FormField>
        <div />
      </div>

      <FormField error={errors.message?.message} htmlFor="quote-message" label="Project brief">
        <Textarea
          id="quote-message"
          placeholder="Share the event goals, audience, atmosphere, and any must-have deliverables."
          {...register("message")}
        />
      </FormField>

      <FormFeedback error={errorMessage} success={successMessage} />

      <div className="flex justify-start">
        <Button disabled={isSubmitting} type="submit">
          {isSubmitting ? "Sending..." : "Request quote"}
        </Button>
      </div>
    </form>
  );
}
