"use client";

import { Phone, Mail, Clock, MapPin } from 'lucide-react';
import Script from 'next/script';

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
            
            {/* GoHighLevel embed form */}
            <div className="ghl-embed-form-container">
              <iframe
                src="https://api.leadconnectorhq.com/widget/form/o5vw4364dsRhCO7TuHJY"
                style={{
                  width: "100%",
                  height: "708px",
                  border: "none",
                  borderRadius: "3px"
                }}
                id="inline-o5vw4364dsRhCO7TuHJY" 
                data-layout={"{'id':'INLINE'}"}
                data-trigger-type="showOnScrolling"
                data-trigger-value="30"
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Contact Form"
                data-height="708"
                data-layout-iframe-id="inline-o5vw4364dsRhCO7TuHJY"
                data-form-id="o5vw4364dsRhCO7TuHJY"
                title="Contact Form"
              />
              <Script src="https://link.msgsndr.com/js/form_embed.js" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 