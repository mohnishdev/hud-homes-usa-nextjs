/**
 * Application Constants
 * Centralized configuration for colors, text, phone numbers, etc.
 */

// Brand Colors
export const COLORS = {
  BRAND_RED: "#E31C23",
  DARK_BLACK: "#010322",
  TEXT_PRIMARY: "#1E293B",
  TEXT_SECONDARY: "#64748B",
  BORDER_LIGHT: "#CBD5E1",
  BORDER_SLATE: "#1e293b",
  BG_LIGHT: "#F7F8FA",
  BG_DARK: "#1a1a1a",
  BG_GRAY: "#f5f6fa",
};

// Contact Information
export const CONTACT = {
  PHONE: "(800) 370-8870",
  EMAIL: "info@example.com",
  SUPPORT_EMAIL: "davidt.1978@yahoo.com",
};

// Form Data
export const INITIAL_FORM_DATA = {
  firstName: "David",
  lastName: "Tang",
  phone: "818-678-4321",
  email: "davidt.1978@yahoo.com",
};

export const CREDIT_CARD_INITIAL = {
  cardNumber: "",
  cardMM: "",
  cardYYYY: "",
  billingZip: "",
};

// Trial Information
export const TRIAL = {
  PRICE: "$1.00",
  DURATION_DAYS: 30,
  REGULAR_PRICE: "$49.90",
  DURATION_TEXT: "30 days trial",
};

// Random Value Ranges
export const RANDOMIZATION = {
  PEOPLE_INTERESTED_MIN: 118,
  PEOPLE_INTERESTED_MAX: 168,
  PEOPLE_WATCHING_MIN: 30,
  PEOPLE_WATCHING_MAX: 60,
  IMAGE_COUNT_MIN: 3,
  IMAGE_COUNT_MAX: 8,
};

// Scroll Offset
export const SCROLL_OFFSET = {
  SMOOTH_SCROLL_OFFSET: 35, // pixels
};

// Property Information
export const PROPERTY = {
  DEAL_SCORE: "7.8/10",
  DEAL_LABEL: "Great Deal",
  PROPERTY_TYPE: "REO Foreclosure",
  CATEGORY: "Single Family Home",
  BEDS: 3,
  BATHS: 2,
  SQFT: "2,452",
  LOCATION: "Oxnard, CA 93030",
};

// Copyright & Legal
export const LEGAL = {
  COPYRIGHT_YEAR: 2023,
  COMPANY_NAME: "HUDHomesUSA.org",
  DISCLAIMER: "HUDHomesUSA.org is not affiliated with, endorsed, authorized, or approved by the Federal Government or the US Department of Housing and Urban Development.",
};

// Testimonials
export const TESTIMONIALS = [
  {
    id: 1,
    stars: 5,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    author: "Anthony R."
  },
  {
    id: 2,
    stars: 4,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    author: "Anthony R."
  },
  {
    id: 3,
    stars: 5,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    author: "Anthony R."
  }
];

// Footer Links
export const FOOTER_LINKS = [
  { text: "Contact Us", href: "#" },
  { text: "Terms and Conditions", href: "#" },
  { text: "Privacy Policy", href: "#" },
  { text: "Do Not Sell My Info", href: "#" }
];
