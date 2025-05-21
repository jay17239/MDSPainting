import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { CheckCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Cabinet Refinishing | MDS Painting | Northeast Ohio",
  description: "Professional cabinet refinishing and painting services in Northeast Ohio. Transform your kitchen or bathroom with expert cabinet refinishing from MDS Painting.",
};

export default function CabinetRefinishingPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <div className="relative h-[400px] md:h-[500px] flex items-center justify-center">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-primary/60 z-10"></div>
          <div className="absolute inset-0 bg-cover bg-center" style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1556909211-36987daf7b4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80')"
          }}></div>
        </div>
        <div className="container relative z-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Cabinet Refinishing Services</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">Transform your kitchen or bathroom with professional cabinet refinishing</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left column - Content */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-6">Expert Cabinet Refinishing in Northeast Ohio</h2>
              <p className="mb-6">
                Your cabinets are the focal point of your kitchen and bathroom spaces. At MDS Painting, our cabinet 
                refinishing services can completely transform these critical areas of your home without the cost and 
                disruption of a full remodel. Our expert techniques breathe new life into your existing cabinets, 
                giving you a fresh, updated look at a fraction of the cost of replacement.
              </p>
              
              <h3 className="text-2xl font-bold mb-4 mt-8">Our Cabinet Refinishing Process</h3>
              <p className="mb-6">
                We follow a meticulous process to ensure flawless results for every cabinet refinishing project:
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="text-primary mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">Thorough Preparation</h4>
                    <p className="text-gray-600">We remove doors and hardware, clean all surfaces thoroughly, and repair any damaged areas before beginning the refinishing process.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="text-primary mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">Careful Sanding</h4>
                    <p className="text-gray-600">We meticulously sand all surfaces to create the perfect foundation for new finishes, ensuring smooth and even results.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="text-primary mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">Premium Materials</h4>
                    <p className="text-gray-600">We use high-quality primers, paints, and finishes specifically formulated for cabinets to ensure durability and a beautiful appearance.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="text-primary mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">Expert Application</h4>
                    <p className="text-gray-600">Our skilled craftsmen apply multiple coats with precise techniques, allowing proper curing time between applications.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="text-primary mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">Reassembly and Detailing</h4>
                    <p className="text-gray-600">We carefully reinstall doors, drawers, and hardware, making any necessary adjustments for perfect alignment and function.</p>
                  </div>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 mt-8">Cabinet Refinishing Options</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold">Cabinet Painting</h4>
                  <p className="text-gray-600">Transform your cabinets with beautiful, durable paint in any color to match your decor.</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold">Cabinet Staining</h4>
                  <p className="text-gray-600">Enhance the natural beauty of your wood cabinets with custom staining options.</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold">Glazing & Antiquing</h4>
                  <p className="text-gray-600">Add depth and character with specialized glazing and antiquing techniques.</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold">Two-Tone Finishes</h4>
                  <p className="text-gray-600">Create visual interest with contrasting island and perimeter cabinet colors.</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold">Distressed Finishes</h4>
                  <p className="text-gray-600">Achieve a rustic, lived-in look with artful distressing techniques.</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold">Clear Coating</h4>
                  <p className="text-gray-600">Protect and enhance existing wood while maintaining its natural appearance.</p>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold mb-3">Benefits of Cabinet Refinishing</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="text-primary mt-1 mr-2 flex-shrink-0" size={16} />
                    <span><strong>Cost-Effective:</strong> Save 50-70% compared to cabinet replacement</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-primary mt-1 mr-2 flex-shrink-0" size={16} />
                    <span><strong>Faster Completion:</strong> Most projects completed in just 3-5 days</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-primary mt-1 mr-2 flex-shrink-0" size={16} />
                    <span><strong>Less Disruption:</strong> Minimal impact on your daily life compared to full remodels</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-primary mt-1 mr-2 flex-shrink-0" size={16} />
                    <span><strong>Environmentally Friendly:</strong> Reduces landfill waste from cabinet disposal</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-primary mt-1 mr-2 flex-shrink-0" size={16} />
                    <span><strong>Custom Look:</strong> Unlimited color and finish options to match your style</span>
                  </li>
                </ul>
              </div>
              
              <div className="mt-12 mb-8">
                <h3 className="text-2xl font-bold mb-6">Our Recent Cabinet Refinishing Projects</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="overflow-hidden rounded-lg">
                    <Image 
                      src="https://images.unsplash.com/photo-1556910585-09baa3a3c593?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                      alt="Kitchen with refinished white cabinets"
                      width={600}
                      height={400}
                      className="w-full h-64 object-cover"
                    />
                  </div>
                  <div className="overflow-hidden rounded-lg">
                    <Image 
                      src="https://images.unsplash.com/photo-1604709177225-055f99402ea3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                      alt="Modern bathroom with refinished cabinets"
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
                <h3 className="text-xl font-bold mb-4">Why Choose MDS Painting for Cabinet Refinishing</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="text-primary mr-2 flex-shrink-0" size={16} />
                    <span>Specialized cabinet finishing expertise</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-primary mr-2 flex-shrink-0" size={16} />
                    <span>Premium, durable cabinet finishes</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-primary mr-2 flex-shrink-0" size={16} />
                    <span>Meticulous attention to detail</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-primary mr-2 flex-shrink-0" size={16} />
                    <span>Fully insured professionals</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-primary mr-2 flex-shrink-0" size={16} />
                    <span>Clean and organized work process</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-primary mr-2 flex-shrink-0" size={16} />
                    <span>Satisfaction guaranteed</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-accent p-6 rounded-lg text-center">
                <h3 className="text-xl font-bold mb-3 text-primary">Ready to Transform Your Cabinets?</h3>
                <p className="mb-6 text-primary-dark">Contact us today for a free consultation and estimate on your cabinet refinishing project.</p>
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
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Kitchen or Bathroom?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg text-white/90">
            Contact MDS Painting today to schedule your free consultation and estimate.
            Our cabinet refinishing services will give your home a fresh new look.
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