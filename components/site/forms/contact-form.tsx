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
import { enquiryCategories, preferredContactMethods } from "@/lib/site";
import { contactFormSchema, type ContactFormInput } from "@/lib/site-schemas";

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactFormInput>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      preferredContactMethod: "Email",
      enquiryCategory: "",
      message: ""
    }
  });

  const { submit, errorMessage, successMessage, isSubmitting } = useFormSubmission("contact");

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
        <FormField error={errors.name?.message} htmlFor="contact-name" label="Full name">
          <Input id="contact-name" placeholder="Your name" {...register("name")} />
        </FormField>
        <FormField error={errors.company?.message} htmlFor="contact-company" label="Company">
          <Input id="contact-company" placeholder="Optional" {...register("company")} />
        </FormField>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <FormField error={errors.email?.message} htmlFor="contact-email" label="Email">
          <Input id="contact-email" placeholder="name@example.com" type="email" {...register("email")} />
        </FormField>
        <FormField error={errors.phone?.message} htmlFor="contact-phone" label="Phone">
          <Input id="contact-phone" placeholder="+27 ..." {...register("phone")} />
        </FormField>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <FormField error={errors.preferredContactMethod?.message} htmlFor="contact-method" label="Preferred contact method">
          <Select id="contact-method" {...register("preferredContactMethod")}>
            {preferredContactMethods.map((method) => (
              <option key={method} value={method}>
                {method}
              </option>
            ))}
          </Select>
        </FormField>
        <FormField error={errors.enquiryCategory?.message} htmlFor="contact-category" label="Enquiry category">
          <Select id="contact-category" {...register("enquiryCategory")}>
            <option value="">Select a category</option>
            {enquiryCategories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </Select>
        </FormField>
      </div>

      <FormField error={errors.message?.message} htmlFor="contact-message" label="How can we help?">
        <Textarea
          id="contact-message"
          placeholder="Tell us about your event, campaign, partnership, or support request."
          {...register("message")}
        />
      </FormField>

      <FormFeedback error={errorMessage} success={successMessage} />

      <div className="flex justify-start">
        <Button disabled={isSubmitting} type="submit">
          {isSubmitting ? "Sending..." : "Send enquiry"}
        </Button>
      </div>
    </form>
  );
}
