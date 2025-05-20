import GallerySection from "@/components/GallerySection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | MDS Painting | Northeast Ohio Painting Services",
  description: "Browse our portfolio of completed painting projects across Northeast Ohio. See the quality and craftsmanship of MDS Painting's residential and commercial work.",
};

export default function GalleryPage() {
  return (
    <main>
      <div className="pt-20">
        <GallerySection />
      </div>
    </main>
  );
} 