import type { Metadata } from "next";
import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "MDS Painting | Northeast Ohio's Trusted Residential & Commercial Painting Experts",
  description: "Professional painting services for residential and commercial properties in Northeast Ohio. Interior, exterior, cabinet refinishing, and more.",
  openGraph: {
    title: "MDS Painting | Northeast Ohio's Trusted Residential & Commercial Painting Experts",
    description: "Professional painting services for residential and commercial properties in Northeast Ohio. Interior, exterior, cabinet refinishing, and more.",
    url: "https://www.mdspainting.com",
    siteName: "MDS Painting",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
} 