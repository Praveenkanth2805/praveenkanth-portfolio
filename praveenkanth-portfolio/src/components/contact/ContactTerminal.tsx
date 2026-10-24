"use client";
import { Terminal } from "@/components/shared/Terminal";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function ContactTerminal() {
  return (
    <section className="mt-12">
      <SectionHeading eyebrow="Or send a command" title="Terminal" description="Try: help · about · skills · projects · contact" />
      <Terminal
        welcome={[
          { text: "whoami", tone: "prompt" },
          { text: "Praveenkanth — Full-Stack Developer & AI-Assisted Developer", tone: "output" },
          { text: "contact", tone: "prompt" },
          { text: "Type 'contact' to see my verified details", tone: "output" },
        ]}
      />
    </section>
  );
}