import type { Metadata } from "next";
import AboutPage from "@/views/About";

export const metadata: Metadata = {
  title: "About Auto Glam",
  description:
    "Learn about Auto Glam - Hubballi's trusted car service partner for premium detailing and vehicle care.",
  alternates: { canonical: "https://www.autoglam.com/about" },
};

export const dynamic = "force-static";

export default function AboutRoutePage() {
  return <AboutPage />;
}
