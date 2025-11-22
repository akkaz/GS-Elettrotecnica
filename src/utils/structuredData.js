export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "GS Elettrotecnica Automazioni Industriali Srl",
  "url": "https://www.elettrotecnicags.it",
  "logo": "https://www.elettrotecnicags.it/logo.png",
  "description": "Oltre 30 anni di eccellenza nell'impiantistica elettrica e automazione industriale in Valle Camonica",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Via delle Cave, 17",
    "addressLocality": "Cividate Camuno",
    "addressRegion": "BS",
    "postalCode": "25040",
    "addressCountry": "IT"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+39-0364-341038",
    "contactType": "customer service",
    "email": "info@elettrotecnicags.it",
    "availableLanguage": ["Italian"]
  },
  "foundingDate": "1990",
  "numberOfEmployees": {
    "@type": "QuantitativeValue",
    "value": 40
  }
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "GS Elettrotecnica",
  "image": "https://www.elettrotecnicags.it/logo.png",
  "@id": "https://www.elettrotecnicags.it",
  "url": "https://www.elettrotecnicags.it",
  "telephone": "+39-0364-341038",
  "priceRange": "€€€",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Via delle Cave, 17",
    "addressLocality": "Cividate Camuno",
    "postalCode": "25040",
    "addressCountry": "IT"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 45.9333,
    "longitude": 10.2833
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday"
    ],
    "opens": "08:00",
    "closes": "18:00"
  }
};

export function generateServiceSchema(service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": service.title,
    "provider": {
      "@type": "Organization",
      "name": "GS Elettrotecnica"
    },
    "areaServed": {
      "@type": "Place",
      "name": "Valle Camonica, Brescia, Lombardia"
    },
    "description": service.description
  };
}
