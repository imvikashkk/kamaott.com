// Business details from the Udyam certificate. Every page reads from here.
export const BRAND = "KamaOTT";
export const DOMAIN = "kamaott.com";
export const ENTITY = "Social Scaler";
export const UDYAM = "UDYAM-OD-19-0015783";
export const EMAIL = "kamaott.com@gmail.com";
export const ADDRESS_LINES = [
  "188, Bhuasuni Road, Samantrapur",
  "Bhubaneswar, Khordha",
  "Odisha 751002, India",
];
export const ADDRESS_INLINE = ADDRESS_LINES.join(", ");
export const POLICY_DATE = "4 November 2026";

export const FOOTER_LINKS = [
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
  { href: "/terms", label: "Terms & Conditions" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/refund-policy", label: "Refund & Cancellation" },
  { href: "/delivery-policy", label: "Service Delivery" },
] as const;

export const NAV_LINKS = [
  { href: "/", label: "Home", icon: "home" },
  { href: "/#web-series", label: "Web Series", icon: "series" },
  { href: "/#films", label: "Films", icon: "film" },
  { href: "/#originals", label: "Originals", icon: "star" },
  { href: "/#app", label: "App", icon: "phone" },
] as const;
