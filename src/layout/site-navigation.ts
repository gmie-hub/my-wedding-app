import { RSVP_URL } from "wed/data/site-links";

export const navigationItems = [
  { href: "/", label: "Home" },
  { href: "/our-story", label: "Our Story" },
  { href: "/details", label: "Details" },
  { href: "/registry", label: "Gift Us" },
  { href: RSVP_URL, label: "RSVP" },
] as const;
