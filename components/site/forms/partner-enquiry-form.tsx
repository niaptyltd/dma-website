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
import { preferredContactMethods } from "@/lib/site";
import { partnerEnquirySchema, type PartnerEnquiryInput } from "@/lib/site-schemas";

const partnershipTypes = [
  "Event sponsorship",
  "Long-term brand partnership",
  "Community support partnership",
  "Talent development support",
  "Production collaboration"
];

export function PartnerEnquiryForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<PartnerEnquiryInput>({
    resolver: zodResolver(partnerEnquirySchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      preferredContactMethod: "Email",
      partnershipType: "",
      message: ""
    }
  });

  const { submit, errorMessage, successMessage, isSubmitting } = useFormSubmission("partnerEnquiry");

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
        <FormField error={errors.name?.message} htmlFor="partner-name" label="Contact name">
          <Input id="partner-name" placeholder="Your name" {...register("name")} />
        </FormField>
        <FormField error={errors.company?.message} htmlFor="partner-company" label="Company or organisation">
          <Input id="partner-company" placeholder="Organisation name" {...register("company")} />
        </FormField>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <FormField error={errors.email?.message} htmlFor="partner-email" label="Email">
          <Input id="partner-email" placeholder="name@example.com" type="email" {...register("email")} />
        </FormField>
        <FormField error={errors.phone?.message} htmlFor="partner-phone" label="Phone">
          <Input id="partner-phone" placeholder="+27 ..." {...register("phone")} />
        </FormField>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <FormField error={errors.partnershipType?.message} htmlFor="partner-type" label="Partnership type">
          <Select id="partner-type" {...register("partnershipType")}>
            <option value="">Select partnership type</option>
            {partnershipTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </Select>
        </FormField>
        <FormField error={errors.preferredContactMethod?.message} htmlFor="partner-method" label="Preferred contact method">
          <Select id="partner-method" {...register("preferredContactMethod")}>
            {preferredContactMethods.map((method) => (
              <option key={method} value={method}>
                {method}
              </option>
            ))}
          </Select>
        </FormField>
      </div>

      <FormField error={errors.message?.message} htmlFor="partner-message" label="Partnership brief">
        <Textarea
          id="partner-message"
          placeholder="Tell us about your brand, audience goals, preferred activation type, or sponsorship priorities."
          {...register("message")}
        />
      </FormField>

      <FormFeedback error={errorMessage} success={successMessage} />

      <div className="flex justify-start">
        <Button disabled={isSubmitting} type="submit">
          {isSubmitting ? "Sending..." : "Send partnership enquiry"}
        </Button>
      </div>
    </form>
  );
}
