import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { CheckCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Interior Painting | MDS Painting | Northeast Ohio",
  description: "Professional interior painting services for homes and businesses in Northeast Ohio. Transform your space with premium paints and expert craftsmanship from MDS Painting.",
};

export default function InteriorPaintingPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <div className="relative h-[400px] md:h-[500px] flex items-center justify-center">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-primary/60 z-10"></div>
          <div className="absolute inset-0 bg-cover bg-center" style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1562663474-6cbb3eaa4d14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80')"
          }}></div>
        </div>
        <div className="container relative z-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Interior Painting Services</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">Transform your living and working spaces with our professional interior painting services</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left column - Content */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-6">Professional Interior Painting in Northeast Ohio</h2>
              <p className="mb-6">
                At MDS Painting, we understand that your interior spaces are a reflection of your style and personality. 
                Our interior painting services are designed to transform your spaces with premium paints and expert craftsmanship, 
                ensuring beautiful, long-lasting results that you'll love for years to come.
              </p>
              
              <h3 className="text-2xl font-bold mb-4 mt-8">Our Interior Painting Process</h3>
              <p className="mb-6">
                We follow a meticulous process to ensure exceptional results for every interior painting project:
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="text-primary mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">Thorough Preparation</h4>
                    <p className="text-gray-600">We carefully prepare all surfaces, including cleaning, patching holes, sanding rough areas, and priming as needed.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="text-primary mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">Premium Materials</h4>
                    <p className="text-gray-600">We use only high-quality, low-VOC paints and materials that provide superior coverage and lasting durability.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="text-primary mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">Expert Application</h4>
                    <p className="text-gray-600">Our skilled painters apply paint with precision, ensuring clean lines, even coverage, and a flawless finish.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="text-primary mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">Meticulous Cleanup</h4>
                    <p className="text-gray-600">When the job is complete, we thoroughly clean the area, leaving your space spotless and ready to enjoy.</p>
                  </div>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 mt-8">Interior Areas We Paint</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold">Living Rooms</h4>
                  <p className="text-gray-600">Create a welcoming atmosphere in your main living spaces.</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold">Kitchens & Dining Rooms</h4>
                  <p className="text-gray-600">Refresh your culinary and dining spaces with durable, washable finishes.</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold">Bedrooms</h4>
                  <p className="text-gray-600">Transform your personal retreats with calming or energizing colors.</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold">Bathrooms</h4>
                  <p className="text-gray-600">Specialized moisture-resistant paints for high-humidity areas.</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold">Hallways & Entryways</h4>
                  <p className="text-gray-600">Create a lasting first impression with fresh, inviting entrances.</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold">Offices & Workspaces</h4>
                  <p className="text-gray-600">Productive environments with professional-looking finishes.</p>
                </div>
              </div>
              
              <div className="mt-12 mb-8">
                <h3 className="text-2xl font-bold mb-6">Our Recent Interior Painting Projects</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="overflow-hidden rounded-lg">
                    <Image 
                      src="https://images.unsplash.com/photo-1616137422495-1e9e46e2aa77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                      alt="Modern living room with fresh paint"
                      width={600}
                      height={400}
                      className="w-full h-64 object-cover"
                    />
                  </div>
                  <div className="overflow-hidden rounded-lg">
                    <Image 
                      src="https://images.unsplash.com/photo-1560185009-5bf9f2849488?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                      alt="Freshly painted bedroom"
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
                <h3 className="text-xl font-bold mb-4">Why Choose MDS Painting</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="text-primary mr-2 flex-shrink-0" size={16} />
                    <span>10+ years of experience</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-primary mr-2 flex-shrink-0" size={16} />
                    <span>Fully licensed and insured</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-primary mr-2 flex-shrink-0" size={16} />
                    <span>Premium quality paints</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-primary mr-2 flex-shrink-0" size={16} />
                    <span>Experienced, professional team</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-primary mr-2 flex-shrink-0" size={16} />
                    <span>Satisfaction guaranteed</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-primary mr-2 flex-shrink-0" size={16} />
                    <span>Clean and courteous service</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-accent p-6 rounded-lg text-center">
                <h3 className="text-xl font-bold mb-3 text-primary">Ready to Transform Your Space?</h3>
                <p className="mb-6 text-primary-dark">Contact us today for a free consultation and estimate on your interior painting project.</p>
                <Link href="/contact" className="btn w-full flex items-center justify-center">
                  Get Free Estimate <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
              
              <div className="mt-8 p-6 border border-gray-200 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Service Areas</h3>
                <p className="mb-4">We proudly serve clients throughout Northeast Ohio, including:</p>
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
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Interior Painting Project?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg text-white/90">
            Contact MDS Painting today to schedule your free consultation and estimate.
            Our team is ready to help transform your interior spaces.
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