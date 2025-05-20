import WhyChooseUs from "@/components/WhyChooseUs";
import ReviewsSection from "@/components/ReviewsSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | MDS Painting | Northeast Ohio Painting Services",
  description: "Learn about MDS Painting, Northeast Ohio's trusted painting experts. Our commitment to quality and customer satisfaction has made us a leading painting contractor in the region.",
};

export default function AboutPage() {
  return (
    <main>
      <div className="pt-20">
        <div className="section">
          <div className="container">
            <h1 className="section-title">About MDS Painting</h1>
            <div className="max-w-3xl mx-auto">
              <p className="mb-6 text-lg">
                MDS Painting is a premier painting contractor serving Northeast Ohio with exceptional residential and commercial painting services. With years of experience and a dedication to quality, we transform properties with precision and expertise.
              </p>
              <p className="mb-6 text-lg">
                Our team consists of skilled professionals who take pride in their craftsmanship. We use only the highest quality materials and follow meticulous processes to ensure beautiful, long-lasting results for every project.
              </p>
              <p className="text-lg">
                Whether you're looking to refresh your home's interior, update your exterior, revitalize your business space, or refinish your cabinets, MDS Painting delivers superior results that exceed expectations.
              </p>
            </div>
          </div>
        </div>
        <WhyChooseUs />
        <ReviewsSection />
      </div>
    </main>
  );
} 