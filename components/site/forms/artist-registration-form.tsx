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
import { creativeTypes, preferredContactMethods } from "@/lib/site";
import { artistRegistrationSchema, type ArtistRegistrationInput } from "@/lib/site-schemas";

const samroStatuses = ["Already registered", "Need support with registration", "Not sure yet"];

export function ArtistRegistrationForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ArtistRegistrationInput>({
    resolver: zodResolver(artistRegistrationSchema),
    defaultValues: {
      name: "",
      stageName: "",
      email: "",
      phone: "",
      preferredContactMethod: "WhatsApp",
      creativeType: "",
      location: "",
      socialLink: "",
      samroStatus: "",
      message: ""
    }
  });

  const { submit, errorMessage, successMessage, isSubmitting } = useFormSubmission("artistRegistration");

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
        <FormField error={errors.name?.message} htmlFor="artist-name" label="Full name">
          <Input id="artist-name" placeholder="Your full name" {...register("name")} />
        </FormField>
        <FormField error={errors.stageName?.message} htmlFor="artist-stage-name" label="Stage name">
          <Input id="artist-stage-name" placeholder="Optional" {...register("stageName")} />
        </FormField>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <FormField error={errors.email?.message} htmlFor="artist-email" label="Email">
          <Input id="artist-email" placeholder="name@example.com" type="email" {...register("email")} />
        </FormField>
        <FormField error={errors.phone?.message} htmlFor="artist-phone" label="Phone or WhatsApp">
          <Input id="artist-phone" placeholder="+27 ..." {...register("phone")} />
        </FormField>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <FormField error={errors.creativeType?.message} htmlFor="artist-type" label="Creative category">
          <Select id="artist-type" {...register("creativeType")}>
            <option value="">Select your category</option>
            {creativeTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </Select>
        </FormField>
        <FormField error={errors.location?.message} htmlFor="artist-location" label="Location">
          <Input id="artist-location" placeholder="Town or region" {...register("location")} />
        </FormField>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <FormField error={errors.socialLink?.message} htmlFor="artist-social-link" label="Portfolio or social link">
          <Input id="artist-social-link" placeholder="https://..." {...register("socialLink")} />
        </FormField>
        <FormField error={errors.samroStatus?.message} htmlFor="artist-samro" label="SAMRO status">
          <Select id="artist-samro" {...register("samroStatus")}>
            <option value="">Select your status</option>
            {samroStatuses.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </Select>
        </FormField>
      </div>

      <FormField error={errors.preferredContactMethod?.message} htmlFor="artist-method" label="Preferred contact method">
        <Select id="artist-method" {...register("preferredContactMethod")}>
          {preferredContactMethods.map((method) => (
            <option key={method} value={method}>
              {method}
            </option>
          ))}
        </Select>
      </FormField>

      <FormField error={errors.message?.message} htmlFor="artist-message" label="Tell us about your work">
        <Textarea
          id="artist-message"
          placeholder="Share what you do, the support you need, and any event or brand opportunities you are interested in."
          {...register("message")}
        />
      </FormField>

      <FormFeedback error={errorMessage} success={successMessage} />

      <div className="flex justify-start">
        <Button disabled={isSubmitting} type="submit">
          {isSubmitting ? "Sending..." : "Register interest"}
        </Button>
      </div>
    </form>
  );
}
