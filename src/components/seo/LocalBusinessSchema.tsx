import type { WithContext, LocalBusiness } from "schema-dts";

export function LocalBusinessSchema() {
  const schema: WithContext<LocalBusiness> = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.autoglam.com/#business",
    name: "Auto Glam Car Service Centre",
    url: "https://www.autoglam.com",
    logo: "https://www.autoglam.com/icon.png",
    image: "https://www.autoglam.com/og-image.jpg",
    description:
      "Premium car detailing, ceramic coating, PPF, paint correction, and automotive care services in Hubballi, Karnataka.",
    telephone: "+919686363735",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Shop No.01, Bannigida Cross, Kusugal Rd, Keshwapur",
      addressLocality: "Hubballi",
      addressRegion: "Karnataka",
      postalCode: "580023",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 15.3647,
      longitude: 75.1240,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday", "Tuesday", "Wednesday",
          "Thursday", "Friday", "Saturday", "Sunday",
        ],
        opens: "09:00",
        closes: "20:00",
      },
    ],
    priceRange: "₹₹₹",
    areaServed: {
      "@type": "City",
      name: "Hubballi",
    },
    sameAs: [
      "https://www.instagram.com/agautoglam/",
      "https://wa.me/919686363735",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
