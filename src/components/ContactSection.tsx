import { Phone, Mail, Clock, MapPin } from 'lucide-react';

export default function ContactSection() {
  return (
    <section className="section bg-gray-50" id="contact">
      <div className="container">
        <h2 className="section-title">Contact Us</h2>
        <p className="max-w-2xl mx-auto text-center mb-12 text-gray-600">
          Ready to transform your space? Get in touch for a free estimate or to discuss your project.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
            
            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mr-4 bg-primary/10 p-3 rounded-full">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Phone</h4>
                  <a href="tel:+12169653804" className="text-gray-600 hover:text-primary">
                    216.965.3804
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 bg-primary/10 p-3 rounded-full">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Email</h4>
                  <a href="mailto:info@mdspainting.com" className="text-gray-600 hover:text-primary">
                    info@mdspainting.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 bg-primary/10 p-3 rounded-full">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Business Hours</h4>
                  <p className="text-gray-600">Monday: 8:00 AM - 9:00 PM</p>
                  <p className="text-gray-600">Tuesday: 8:00 AM - 9:00 PM</p>
                  <p className="text-gray-600">Wednesday: 8:00 AM - 7:00 PM</p>
                  <p className="text-gray-600">Thursday: 8:00 AM - 9:00 PM</p>
                  <p className="text-gray-600">Friday: 8:00 AM - 7:00 PM</p>
                  <p className="text-gray-600">Saturday: 9:00 AM - 5:00 PM</p>
                  <p className="text-gray-600">Sunday: 11:00 AM - 9:00 PM</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 bg-primary/10 p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Location</h4>
                  <p className="text-gray-600">2534 Grant Ave</p>
                  <p className="text-gray-600">Cuyahoga Falls, Ohio 44223</p>
                  <p className="text-gray-600 mt-2">Serving Northeast Ohio</p>
                </div>
              </div>
            </div>
            
            {/* Google Map */}
            <div className="mt-8 h-64 rounded-lg overflow-hidden border border-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2990.274257471298!2d-81.48215548872015!3d41.14350491733726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8830d634ede5c0c9%3A0xb6eb3f388cd9e407!2s2534%20Grant%20Ave%2C%20Cuyahoga%20Falls%2C%20OH%2044223!5e0!3m2!1sen!2sus!4v1621341448123!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="MDS Painting Location"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-6">Request a Free Estimate</h3>
            
            {/* This would be replaced with the actual GoHighLevel embed code */}
            <div className="ghl-embed-form-container">
              {/* GoHighLevel form embed would go here */}
              {/* For now, we'll create a placeholder form */}
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-1 font-medium">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="John Smith"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block mb-1 font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block mb-1 font-medium">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="(216) 965-3804"
                  />
                </div>
                
                <div>
                  <label htmlFor="service" className="block mb-1 font-medium">
                    Service Needed
                  </label>
                  <select
                    id="service"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select a service</option>
                    <option value="interior">Interior Painting</option>
                    <option value="exterior">Exterior Painting</option>
                    <option value="commercial">Commercial Painting</option>
                    <option value="cabinets">Cabinet Refinishing</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block mb-1 font-medium">
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Tell us about your project..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full btn"
                >
                  Submit Request
                </button>
                
                <p className="text-sm text-gray-500 text-center">
                  * We'll get back to you within 24 hours
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 