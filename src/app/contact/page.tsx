import ContactSection from "@/components/ContactSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | MDS Painting | Northeast Ohio Painting Services",
  description: "Contact MDS Painting for professional painting services in Northeast Ohio. Request a free estimate for your residential or commercial painting project today.",
};

export default function ContactPage() {
  return (
    <main>
      <div className="pt-20">
        <ContactSection />
      </div>
    </main>
  );
} 