"use client";

import { useContact } from "@/hooks/use-contact";
import type React from "react";
import { useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/config/animations";

const GetInTouch = () => {
  const { mutate } = useContact();
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
    <section className="py-16 mx-4">
      <div className="container mx-auto px-6 bg-secondary rounded-2xl border py-6 md:py-[95px] md:px-[150px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mx-auto">
          {/* Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            <motion.h2
              className="text-5xl font-bold text-primary-foreground mb-2 text-start"
              variants={fadeInUp}
            >
              Get in touch
            </motion.h2>
            <motion.p
              className="text-primary-foreground text-start mb-5 lg:mb-10 max-w-2xl"
              variants={fadeInUp}
            >
              Our friendly team would love to hear from you.
            </motion.p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <motion.input
                  variants={fadeInUp}
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="bg-white text-gray-900 placeholder-gray-500 rounded-full px-6 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-white/30"
                />
                <motion.input
                  variants={fadeInUp}
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="bg-white text-gray-900 placeholder-gray-500 rounded-full px-6 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-white/30"
                />
              </div>
              <div className="grid grid-cols-1  gap-4">
                <motion.input
                  variants={fadeInUp}
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-white text-gray-900 placeholder-gray-500 rounded-full px-6 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-white/30"
                />
              </div>
              <div className="grid grid-cols-1  gap-4">
                <motion.input
                  variants={fadeInUp}
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="bg-white text-gray-900 placeholder-gray-500 rounded-full px-6 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-white/30"
                />
              </div>

              <motion.textarea
                variants={fadeInUp}
                name="message"
                placeholder="Tell us a message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-white text-gray-900 placeholder-gray-500 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-white/30 resize-none"
              />

              <motion.div
                className="flex items-center gap-2"
                variants={fadeInUp}
              >
                <input type="checkbox" id="privacy" className="w-4 h-4" />
                <label htmlFor="privacy" className="text-[#343A40] text-sm">
                  I agree to the{" "}
                  <Link
                    href="/privacy-policy"
                    className="underline cursor-pointer"
                  >
                    privacy policy
                  </Link>
                </label>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Button
                  type="submit"
                  className="w-full  text-white py-3 rounded-full font-medium transition"
                >
                  Send message
                </Button>
              </motion.div>
            </form>
          </motion.div>

          {/* Map */}
          <motion.div
            className="rounded-lg overflow-hidden h-96 lg:h-auto"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <iframe
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d963.6179371730356!2d-79.27375832139533!3d43.83166698826154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d6bbc2dca6db%3A0xdcb08ca7548aaf0c!2s7011%20McCowan%20Rd%2C%20Markham%2C%20ON%20L3S%203L7%2C%20Canada!5e0!3m2!1sen!2sbd!4v1767039079283!5m2!1sen!2sbd"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
