import { Metadata } from "next";
import ContactContent from "@/components/ContactContent/ContactContent";

export const metadata: Metadata = {
  title: "Keep in touch",
  description:
    "Life is short. I am very happy to interact with you. Feel free to contact me anytime via my social media.",
  alternates: {
    canonical: "/contact",
    languages: {
      en: "/en/contact",
    },
  },
};

const Contact = () => {
  return (
    <ContactContent/>
  )
};

export default Contact;
