import type { Metadata } from "next";
import IndexPage from "@/views/Index";
import { LocalBusinessSchema } from "@/components/seo/LocalBusinessSchema";

export const metadata: Metadata = {
  title: "Auto Glam | Premium Car Detailing, Ceramic Coating & PPF",
  description:
    "Auto Glam - where luxury meets precision. Professional car detailing, ceramic coating and paint protection film services.",
  alternates: { canonical: "https://www.autoglam.com" },
};

export const dynamic = "force-static";

export default function HomePage() {
  return (
    <>
      <LocalBusinessSchema />
      <IndexPage />
    </>
  );
}
