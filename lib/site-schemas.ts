import { z } from "zod";

const baseLeadSchema = {
  name: z.string().trim().min(2, "Enter your full name."),
  email: z.string().trim().email("Enter a valid email address."),
  phone: z.string().trim().min(10, "Enter a valid phone number."),
  preferredContactMethod: z.enum(["Email", "Phone call", "WhatsApp"])
};

export const contactFormSchema = z.object({
  ...baseLeadSchema,
  company: z.string().trim().optional(),
  enquiryCategory: z.string().trim().min(1, "Choose an enquiry category."),
  message: z.string().trim().min(20, "Share a little more detail so we can help well.")
});

export const quoteRequestSchema = z.object({
  ...baseLeadSchema,
  company: z.string().trim().optional(),
  eventType: z.string().trim().min(1, "Select an event type."),
  eventDate: z.string().min(1, "Choose a date."),
  venueLocation: z.string().trim().min(2, "Enter the venue or location."),
  estimatedGuests: z.number().int().min(1, "Enter the expected guest count."),
  budgetRange: z.string().trim().min(1, "Select a budget range."),
  requiredServices: z
    .array(z.string().trim().min(1))
    .min(1, "Select at least one required service."),
  message: z.string().trim().min(20, "Tell us more about the event brief.")
});

export const partnerEnquirySchema = z.object({
  ...baseLeadSchema,
  company: z.string().trim().min(2, "Enter your company or organisation."),
  partnershipType: z.string().trim().min(2, "Tell us what kind of partnership you need."),
  message: z.string().trim().min(20, "Share your partnership goals or sponsorship brief.")
});

export const artistRegistrationSchema = z.object({
  ...baseLeadSchema,
  stageName: z.string().trim().optional(),
  creativeType: z.string().trim().min(1, "Select your creative category."),
  location: z.string().trim().min(2, "Tell us where you are based."),
  socialLink: z
    .string()
    .trim()
    .optional()
    .refine((value) => !value || /^https?:\/\//.test(value), "Enter a full URL that starts with http."),
  samroStatus: z.string().trim().min(1, "Select your SAMRO status."),
  message: z.string().trim().min(20, "Tell us about your work and what support you need.")
});

export type ContactFormInput = z.infer<typeof contactFormSchema>;
export type QuoteRequestInput = z.infer<typeof quoteRequestSchema>;
export type PartnerEnquiryInput = z.infer<typeof partnerEnquirySchema>;
export type ArtistRegistrationInput = z.infer<typeof artistRegistrationSchema>;

export const formSchemas = {
  contact: contactFormSchema,
  quoteRequest: quoteRequestSchema,
  partnerEnquiry: partnerEnquirySchema,
  artistRegistration: artistRegistrationSchema
};

export type FormKind = keyof typeof formSchemas;
