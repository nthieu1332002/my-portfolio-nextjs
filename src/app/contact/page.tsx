import { Metadata } from "next";
import ContactContent from "@/components/ContactContent/ContactContent";

export const metadata: Metadata = {
  title: "Contact | Hire a Front-end Developer",
  description:
    "Looking for an experienced Front-end Developer with React, Next.js, and full-stack skills? Get in touch for collaboration opportunities, freelance projects, or full-time positions.",
  alternates: {
    canonical: "/contact",
    languages: {
      en: "/en/contact",
    },
  },
};

const Contact = () => {
  return (
    <ContactContent />
  )
};

export default Contact;
