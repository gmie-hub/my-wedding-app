import { redirect } from "next/navigation";

import { RSVP_URL } from "wed/data/site-links";

export default function RsvpPage() {
  redirect(RSVP_URL);
}
