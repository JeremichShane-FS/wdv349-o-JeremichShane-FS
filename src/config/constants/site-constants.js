/**
 * General site information constants
 */

export const SITE_NAME = "Urban Echo";
export const SITE_DESCRIPTION = "Premium streetwear and urban fashion";
export const COPYRIGHT_YEAR = new Date().getFullYear();
export const SUPPORT_EMAIL = "support@urbanecho.com";
export const CONTACT_PHONE = "+1 (555) 123-4567";
export const COMPANY_ADDRESS = {
  street: "123 Fashion Avenue",
  city: "New York",
  state: "NY",
  zipCode: "10001",
  country: "United States",
};

// Social Media Links
export const SOCIAL_LINKS = {
  facebook: "https://facebook.com/urbanecho",
  instagram: "https://instagram.com/urbanecho",
  twitter: "https://twitter.com/urbanecho",
  pinterest: "https://pinterest.com/urbanecho",
  tiktok: "https://tiktok.com/@urbanecho",
};

// SEO defaults
export const DEFAULT_SEO = {
  titleTemplate: "%s | Urban Echo",
  defaultTitle: "Urban Echo - Premium Streetwear & Urban Fashion",
  description:
    "Discover the latest in urban streetwear fashion at Urban Echo. Shop premium clothing, accessories, and footwear for men and women.",
  openGraph: {
    type: "website",
    locale: "en_US",
    site_name: "Urban Echo",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Urban Echo",
      },
    ],
  },
  twitter: {
    handle: "@urbanecho",
    site: "@urbanecho",
    cardType: "summary_large_image",
  },
};

// Legal
export const LEGAL_PAGES = [
  { title: "Terms of Service", path: "/legal/terms" },
  { title: "Privacy Policy", path: "/legal/privacy" },
  { title: "Return Policy", path: "/legal/returns" },
  { title: "Shipping Policy", path: "/legal/shipping" },
];
