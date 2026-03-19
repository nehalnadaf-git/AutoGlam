import type { Metadata } from "next";
import ContactPage from "@/views/Contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Auto Glam for premium car detailing, ceramic coating, and PPF services.",
  alternates: { canonical: "https://www.autoglam.com/contact" },
};

export const dynamic = "force-static";

export default function ContactRoutePage() {
  return <ContactPage />;
}
