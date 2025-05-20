import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { CheckCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Exterior Painting | MDS Painting | Northeast Ohio",
  description: "Professional exterior painting services for homes and businesses in Northeast Ohio. Protect and beautify your property with premium paints and expert craftsmanship from MDS Painting.",
};

export default function ExteriorPaintingPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <div className="relative h-[400px] md:h-[500px] flex items-center justify-center">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-primary/60 z-10"></div>
          <div className="absolute inset-0 bg-cover bg-center" style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80')"
          }}></div>
        </div>
        <div className="container relative z-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Exterior Painting Services</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">Protect and beautify your property with our professional exterior painting services</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left column - Content */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-6">Professional Exterior Painting in Northeast Ohio</h2>
              <p className="mb-6">
                Your home's exterior is its first line of defense against the elements and creates that all-important first impression. 
                At MDS Painting, our exterior painting services are designed to protect and beautify your property, enhancing its curb appeal 
                and increasing its value with long-lasting, weather-resistant finishes.
              </p>
              
              <h3 className="text-2xl font-bold mb-4 mt-8">Our Exterior Painting Process</h3>
              <p className="mb-6">
                We follow a thorough process to ensure exceptional results for every exterior painting project:
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="text-primary mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">Surface Preparation</h4>
                    <p className="text-gray-600">We thoroughly clean all surfaces, scrape loose paint, sand rough areas, and repair damaged wood or siding as needed.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="text-primary mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">Quality Materials</h4>
                    <p className="text-gray-600">We use premium, weather-resistant paints and materials specifically formulated to withstand Northeast Ohio's climate conditions.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="text-primary mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">Professional Application</h4>
                    <p className="text-gray-600">Our skilled painters apply paint with precision and attention to detail, ensuring complete coverage and a beautiful finish.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="text-primary mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">Thorough Cleanup</h4>
                    <p className="text-gray-600">We leave your property clean and tidy, removing all debris and materials when the job is complete.</p>
                  </div>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 mt-8">What We Paint</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold">Siding</h4>
                  <p className="text-gray-600">Vinyl, wood, aluminum, fiber cement, and other siding types.</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold">Trim & Fascia</h4>
                  <p className="text-gray-600">Window trim, door frames, fascia boards, and decorative elements.</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold">Doors & Windows</h4>
                  <p className="text-gray-600">Front doors, garage doors, window frames, and shutters.</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold">Decks & Porches</h4>
                  <p className="text-gray-600">Wooden decks, porches, railings, and outdoor living areas.</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold">Fences</h4>
                  <p className="text-gray-600">Wooden fences, gates, and other outdoor structures.</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold">Commercial Exteriors</h4>
                  <p className="text-gray-600">Office buildings, storefronts, and other commercial properties.</p>
                </div>
              </div>
              
              <div className="mt-12 mb-8">
                <h3 className="text-2xl font-bold mb-6">Our Recent Exterior Painting Projects</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="overflow-hidden rounded-lg">
                    <Image 
                      src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                      alt="Beautifully painted house exterior"
                      width={600}
                      height={400}
                      className="w-full h-64 object-cover"
                    />
                  </div>
                  <div className="overflow-hidden rounded-lg">
                    <Image 
                      src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                      alt="Freshly painted home facade"
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
                    <span>Weather-resistant, durable finishes</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-primary mr-2 flex-shrink-0" size={16} />
                    <span>Thorough preparation process</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-primary mr-2 flex-shrink-0" size={16} />
                    <span>Premium quality exterior paints</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-primary mr-2 flex-shrink-0" size={16} />
                    <span>Color consultation available</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-primary mr-2 flex-shrink-0" size={16} />
                    <span>Fully insured and licensed</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-primary mr-2 flex-shrink-0" size={16} />
                    <span>Satisfaction guaranteed</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-accent p-6 rounded-lg text-center">
                <h3 className="text-xl font-bold mb-3 text-primary">Ready to Transform Your Property?</h3>
                <p className="mb-6 text-primary-dark">Contact us today for a free consultation and estimate on your exterior painting project.</p>
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
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Property's Exterior?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg text-white/90">
            Contact MDS Painting today to schedule your free consultation and estimate.
            Enhance your curb appeal with our professional exterior painting services.
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