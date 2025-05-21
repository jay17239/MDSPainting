import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { CheckCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Commercial Painting | MDS Painting | Northeast Ohio",
  description: "Professional commercial painting services for businesses in Northeast Ohio. Transform your office, retail space or commercial property with premium paints and expert craftsmanship from MDS Painting.",
};

export default function CommercialPaintingPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <div className="relative h-[400px] md:h-[500px] flex items-center justify-center">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-primary/60 z-10"></div>
          <div className="absolute inset-0 bg-cover bg-center" style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1581165825575-3dc10b9dbc86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80')"
          }}></div>
        </div>
        <div className="container relative z-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Commercial Painting Services</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">Professional painting solutions for businesses and commercial properties in Northeast Ohio</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left column - Content */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-6">Professional Commercial Painting in Northeast Ohio</h2>
              <p className="mb-6">
                Your business's appearance plays a critical role in how customers, clients, and employees perceive your brand. 
                At MDS Painting, our commercial painting services are designed to enhance your business environment with 
                minimal disruption to your operations. We deliver professional results that protect your investment and 
                create a positive impression for everyone who enters your space.
              </p>
              
              <h3 className="text-2xl font-bold mb-4 mt-8">Our Commercial Painting Approach</h3>
              <p className="mb-6">
                We follow a systematic process to ensure superior results for every commercial painting project:
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="text-primary mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">Comprehensive Assessment</h4>
                    <p className="text-gray-600">We thoroughly evaluate your space, discuss your goals, and develop a detailed plan tailored to your business needs.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="text-primary mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">Flexible Scheduling</h4>
                    <p className="text-gray-600">We work around your business hours to minimize disruption, including evenings and weekends when necessary.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="text-primary mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">Commercial-Grade Materials</h4>
                    <p className="text-gray-600">We use durable, low-VOC, and fast-drying paints specifically formulated for commercial applications.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="text-primary mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">Professional Execution</h4>
                    <p className="text-gray-600">Our experienced team ensures clean, precise work with proper surface preparation and application techniques.</p>
                  </div>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 mt-8">Commercial Properties We Service</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold">Office Buildings</h4>
                  <p className="text-gray-600">Create productive workspaces with professional, brand-aligned color schemes.</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold">Retail Stores</h4>
                  <p className="text-gray-600">Enhance customer experiences with attractive, inviting retail environments.</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold">Restaurants & Cafes</h4>
                  <p className="text-gray-600">Establish the right ambiance with durable finishes that withstand high traffic.</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold">Healthcare Facilities</h4>
                  <p className="text-gray-600">Antimicrobial paint options for clean, comfortable healing environments.</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold">Hotels & Hospitality</h4>
                  <p className="text-gray-600">Create memorable impressions with elegant, coordinated color schemes.</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold">Industrial Spaces</h4>
                  <p className="text-gray-600">Specialized coatings for factories, warehouses, and manufacturing facilities.</p>
                </div>
              </div>
              
              <div className="mt-12 mb-8">
                <h3 className="text-2xl font-bold mb-6">Our Commercial Painting Services Include</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="text-primary mt-1 mr-2 flex-shrink-0" size={16} />
                    <span>Interior and exterior commercial painting</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-primary mt-1 mr-2 flex-shrink-0" size={16} />
                    <span>Specialty coatings and finishes</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-primary mt-1 mr-2 flex-shrink-0" size={16} />
                    <span>Epoxy floor coatings</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-primary mt-1 mr-2 flex-shrink-0" size={16} />
                    <span>Brand color matching</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-primary mt-1 mr-2 flex-shrink-0" size={16} />
                    <span>Wallpaper removal and installation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-primary mt-1 mr-2 flex-shrink-0" size={16} />
                    <span>Drywall repair and texturing</span>
                  </li>
                </ul>
              </div>
              
              <div className="mt-12 mb-8">
                <h3 className="text-2xl font-bold mb-6">Recent Commercial Projects</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="overflow-hidden rounded-lg">
                    <Image 
                      src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                      alt="Modern office space painted by MDS Painting"
                      width={600}
                      height={400}
                      className="w-full h-64 object-cover"
                    />
                  </div>
                  <div className="overflow-hidden rounded-lg">
                    <Image 
                      src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                      alt="Retail space with professional paint finish"
                      width={600}
                      height={400}
                      className="w-full h-64 object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right column - Sidebar */}
            <div>
              <div className="bg-primary/5 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold mb-4">Why Choose MDS Painting for Commercial Projects</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="text-primary mr-2 flex-shrink-0" size={16} />
                    <span>Minimal business disruption</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-primary mr-2 flex-shrink-0" size={16} />
                    <span>Fully insured and licensed</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-primary mr-2 flex-shrink-0" size={16} />
                    <span>Commercial-grade materials</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-primary mr-2 flex-shrink-0" size={16} />
                    <span>Detailed project planning</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-primary mr-2 flex-shrink-0" size={16} />
                    <span>Safety compliance</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-primary mr-2 flex-shrink-0" size={16} />
                    <span>Strict quality control</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-accent p-6 rounded-lg text-center">
                <h3 className="text-xl font-bold mb-3 text-primary">Ready to Transform Your Business Space?</h3>
                <p className="mb-6 text-primary-dark">Contact us today for a free consultation and estimate on your commercial painting project.</p>
                <Link href="/contact" className="btn w-full flex items-center justify-center">
                  Get Free Estimate <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
              
              <div className="mt-8 p-6 border border-gray-200 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Service Areas</h3>
                <p className="mb-4">We proudly serve businesses throughout Northeast Ohio, including:</p>
                <ul className="grid grid-cols-2 gap-2 text-sm">
                  <li>• Cuyahoga Falls</li>
                  <li>• Akron</li>
                  <li>• Cleveland</li>
                  <li>• Stow</li>
                  <li>• Hudson</li>
                  <li>• Kent</li>
                  <li>• Twinsburg</li>
                  <li>• Aurora</li>
                  <li>• Brecksville</li>
                  <li>• Solon</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="bg-primary text-white py-16">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Elevate Your Business Space?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg text-white/90">
            Contact MDS Painting today to schedule your free consultation and estimate.
            Our team specializes in commercial painting projects of all sizes.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-accent btn">
              Get Free Estimate
            </Link>
            <a href="tel:+12169653804" className="btn bg-white text-primary hover:bg-gray-100">
              Call 216.965.3804
            </a>
          </div>
        </div>
      </div>
    </main>
  );
} 