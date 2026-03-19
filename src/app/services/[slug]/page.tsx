import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { services } from "@/data/services";
import { ServiceDetail } from "@/components/services/ServiceDetail";

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const service = services.find((s) => s.slug === resolvedParams.slug);
  if (!service) return {};

  return {
    title: service.seoTitle,
    description: service.seoDescription,
    alternates: {
      canonical: `https://www.autoglam.com/services/${service.slug}`,
    },
    openGraph: {
      title: service.seoTitle,
      description: service.seoDescription,
      images: [{ url: service.ogImage, width: 1200, height: 630 }],
    },
  };
}

export const dynamic = "force-static";

export default async function ServiceRoutePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const service = services.find((s) => s.slug === resolvedParams.slug);
  if (!service) notFound();

  return <ServiceDetail service={service} />;
}
