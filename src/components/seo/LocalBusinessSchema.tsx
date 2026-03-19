import type { WithContext, LocalBusiness } from "schema-dts";

export function LocalBusinessSchema() {
  const schema: WithContext<LocalBusiness> = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.autoglam.com/#business",
    name: "Auto Glam",
    url: "https://www.autoglam.com",
    logo: "https://www.autoglam.com/logo.png",
    image: "https://www.autoglam.com/og-image.jpg",
    description:
      "Premium car detailing, ceramic coating, and paint protection film services.",
    telephone: "+1-XXX-XXX-XXXX",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Your Street",
      addressLocality: "Your City",
      addressRegion: "Your State",
      postalCode: "00000",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 0,
      longitude: 0,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "09:00",
        closes: "16:00",
      },
    ],
    priceRange: "$$$",
    areaServed: {
      "@type": "City",
      name: "Your City",
    },
    sameAs: [
      "https://www.instagram.com/agautoglam/",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
