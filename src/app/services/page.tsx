import ServicesSection from "@/components/ServicesSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | MDS Painting | Northeast Ohio Painting Services",
  description: "Professional painting services offered by MDS Painting in Northeast Ohio including interior, exterior, commercial painting, and cabinet refinishing.",
};

export default function ServicesPage() {
  return (
    <main>
      <div className="pt-20">
        <ServicesSection />
      </div>
    </main>
  );
} 