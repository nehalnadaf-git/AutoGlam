import type { Metadata } from "next";
import ServicesPage from "@/views/Services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Auto Glam's full range of professional automotive services including detailing, ceramic coating, PPF, and restoration.",
  alternates: { canonical: "https://www.autoglam.com/services" },
};

export const dynamic = "force-static";

export default function ServicesRoutePage() {
  return <ServicesPage />;
}
