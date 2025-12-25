"use client";

import { useContact } from "@/hooks/use-contact";
import type React from "react";
import { useState } from "react";

const GetInTouch = () => {
  const { mutate, isPending, isSuccess, isError, error } = useContact();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    phone: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  mutate({
    firstName: formData.firstName,
    lastName: formData.lastName,
    email: formData.email,
    phoneNumber: formData.phone,
    message: formData.message,
  });
};


  return (
    <section className="py-16 bg-[#2A9BA0]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            <h2 className="text-4xl font-bold text-white mb-2 text-start">
              Get in touch
            </h2>
            <p className="text-white/80 text-start mb-5 max-w-2xl">
              We&apos;d love to hear from you. Drop us a message or reach out to
              our team.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="bg-white text-gray-900 placeholder-gray-500 rounded-full px-6 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-white/30"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="bg-white text-gray-900 placeholder-gray-500 rounded-full px-6 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-white/30"
                />
              </div>
                   <div className="grid grid-cols-1  gap-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-white text-gray-900 placeholder-gray-500 rounded-full px-6 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-white/30"
                />
              </div>
              <div className="grid grid-cols-1  gap-4">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="bg-white text-gray-900 placeholder-gray-500 rounded-full px-6 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-white/30"
                />
              </div>
         

              <textarea
                name="message"
                placeholder="Tell us a message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-white text-gray-900 placeholder-gray-500 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-white/30 resize-none"
              />

              <div className="flex items-center gap-2">
                <input type="checkbox" id="privacy" className="w-4 h-4" />
                <label htmlFor="privacy" className="text-white text-sm">
                  I agree to the privacy policy
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-gray-900 text-white py-3 rounded-full font-medium hover:bg-black transition"
              >
                Send message
              </button>
            </form>
          </div>

          {/* Map */}
          <div className="rounded-lg overflow-hidden h-96 lg:h-auto">
            <iframe
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00601892346914!3d40.71282513110044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3855555%3A0x1c6ad15f64403e11!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1234567890"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
