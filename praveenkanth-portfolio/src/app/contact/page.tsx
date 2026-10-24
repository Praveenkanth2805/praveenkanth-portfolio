import type { Metadata } from "next";
import { ContactCards } from "@/components/contact/ContactCards";
import { ContactTerminal } from "@/components/contact/ContactTerminal";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach Praveenkanth by email, GitHub, or LinkedIn. Open to full-stack, frontend, backend, and AI-assisted development opportunities.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl">
      <ContactCards />
      <ContactTerminal />
    </div>
  );
}