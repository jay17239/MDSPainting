import Link from "next/link";
import { Metadata } from "next";
import { CheckCircle, ArrowRight, Home } from "lucide-react";

export const metadata: Metadata = {
  title: "Thank You | MDS Painting | Northeast Ohio",
  description: "Thank you for contacting MDS Painting. We've received your message and will be in touch shortly.",
};

export default function ThankYouPage() {
  return (
    <main className="pt-20">
      <div className="section">
        <div className="container text-center max-w-3xl mx-auto py-16">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <div className="flex justify-center mb-6">
              <div className="h-24 w-24 bg-primary/10 rounded-full flex items-center justify-center">
                <CheckCircle className="h-14 w-14 text-primary" />
              </div>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Thank You!</h1>
            
            <p className="text-lg mb-6">
              Your message has been received. We appreciate your interest in MDS Painting services.
            </p>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h2 className="text-xl font-bold mb-3">What happens next?</h2>
              <p className="mb-4">
                One of our team members will review your information and get back to you within 24-48 hours to discuss your project.
              </p>
              <ul className="space-y-2 text-left">
                <li className="flex items-start">
                  <CheckCircle className="text-primary mt-1 mr-2 flex-shrink-0" size={16} />
                  <span>We'll contact you via phone or email</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-primary mt-1 mr-2 flex-shrink-0" size={16} />
                  <span>We'll schedule a consultation at your convenience</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-primary mt-1 mr-2 flex-shrink-0" size={16} />
                  <span>We'll provide a detailed estimate for your project</span>
                </li>
              </ul>
            </div>
            
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <Link href="/" className="btn flex items-center justify-center">
                <Home className="mr-2" size={16} /> Return to Home
              </Link>
              <Link href="/services" className="btn-accent btn flex items-center justify-center">
                View Our Services <ArrowRight className="ml-2" size={16} />
              </Link>
            </div>
            
            <div className="mt-8 text-gray-500">
              <p>If you have any urgent questions, please call us at <a href="tel:+12169653804" className="text-primary font-medium">216.965.3804</a></p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 