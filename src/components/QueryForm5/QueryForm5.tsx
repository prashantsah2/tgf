"use client";

import type React from "react";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MapPin, Check, Loader2 } from "lucide-react";

export default function QueryForm5({ title }: { title: string }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    companyName: "",
    companyAddress: "",
    pincode: "",
    aoa: "",
    type: "query2",
    aoaOther: "",

    message: "",
    subscribe: false,
    terms: false,
    title: title,
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string) => {
    if (!phone.trim()) return false;
    const phoneRegex = /^[\d\s\-+()]{10,}$/;
    return phoneRegex.test(phone.replace(/\s/g, ""));
  };

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!validatePhone(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number (10+ digits)";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }
    if (!formData.terms) {
      newErrors.terms = "You must agree to the terms and conditions";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/query", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Something went wrong");
      }

      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        companyName: "",
        companyAddress: "",
        aoa: "",
        pincode: "",
        message: "",
        aoaOther: "",
        type: "query2",
        subscribe: false,
        terms: false,
        title: title,
      });
      setTimeout(() => setSubmitted(false), 3000);
    } catch (error: any) {
    } finally {
      setLoading(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <main className="min-h-screen bg-white px-4 py-16 w-full max-w-[1371px] mx-auto  overflow-hidden max-sm:px-0">
      <div className="max-w-[1371px]  w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-2xl md:text-3xl font-bold font-lora text-slate-900 mb-4">
            Book your slot
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-teal-500 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form Section */}
          <motion.div
            className="lg:col-span-2"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-2"> </h2>
            </motion.div>

            <motion.form
              onSubmit={handleSubmit}
              className="space-y-6"
              variants={containerVariants}
            >
              {/* Name and Email */}
              <motion.div
                variants={itemVariants}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">
                    {" "}
                    Name{" "}
                    <span className="text-lg font-outfit text-red-800 mb-2">
                      *
                    </span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-0 py-2 border-b-2 focus:outline-none bg-transparent text-slate-900 transition-colors placeholder-slate-400 ${
                      errors.name
                        ? "border-red-500 focus:border-red-500"
                        : "border-slate-300 focus:border-teal-500"
                    }`}
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">
                    Official Email Address{" "}
                    <span className="text-sm font-outfit text-red-800">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-0 py-2 border-b-2 focus:outline-none bg-transparent text-slate-900 transition-colors placeholder-slate-400 ${
                      errors.email
                        ? "border-red-500 focus:border-red-500"
                        : "border-slate-300 focus:border-teal-500"
                    }`}
                    placeholder="your@email.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                  )}
                </div>
              </motion.div>

              {/* Phone and Contact */}
              <motion.div
                variants={itemVariants}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">
                    Phone Number{" "}
                    <span className="text-sm font-outfit text-red-800">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-0 py-2 border-b-2 focus:outline-none bg-transparent text-slate-900 transition-colors placeholder-slate-400 ${
                      errors.phone
                        ? "border-red-500 focus:border-red-500"
                        : "border-slate-300 focus:border-teal-500"
                    }`}
                    placeholder="(123) 456-7890"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">
                    Organization
                    <span className="text-sm font-outfit text-red-800">*</span>
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    className={`w-full px-0 py-2 border-b-2 focus:outline-none bg-transparent text-slate-900 transition-colors placeholder-slate-400 ${
                      errors.companyName
                        ? "border-red-500 focus:border-red-500"
                        : "border-slate-300 focus:border-teal-500"
                    }`}
                    placeholder="your organization name"
                  />
                  {errors.companyName && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.companyName}
                    </p>
                  )}
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">
                    Orgnization Address{" "}
                    <span className="text-sm font-outfit text-red-800">*</span>
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.companyAddress}
                    onChange={handleChange}
                    className={`w-full px-0 py-2 border-b-2 focus:outline-none bg-transparent text-slate-900 transition-colors placeholder-slate-400 ${
                      errors.companyAddress
                        ? "border-red-500 focus:border-red-500"
                        : "border-slate-300 focus:border-teal-500"
                    }`}
                    placeholder="your organization address"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.companyAddress}
                    </p>
                  )}
                </div>
                <div>

                <label className="block text-sm font-semibold text-slate-900 mb-2">
                    Pincode{" "}
                    <span className="text-sm font-outfit text-red-800">*</span>
                  </label>

                <input
                  type="text"
                  name="pincode"
                  value={formData.pincode || ""}
                  onChange={handleChange}
                  className={`w-full px-0 py-2  border-b-2 focus:outline-none bg-transparent text-slate-900 ${
                    errors.pincode
                      ? "border-red-500 focus:border-red-500"
                      : "border-slate-300 focus:border-teal-500"
                  }`}
                  placeholder="Pincode"
                />
                {errors.pincode && (
                  <p className="text-red-500 text-xs mt-1">{errors.pincode}</p>
                )}

                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">
                    Area of Action
                    <span className="text-sm font-outfit text-red-800">*</span>
                  </label>
                  {/*  <input
                    type="text"
                    name="companyName"
                    value={formData.aoa}
                    onChange={handleChange}
                    className={`w-full px-0 py-2 border-b-2 focus:outline-none bg-transparent text-slate-900 transition-colors placeholder-slate-400 ${
                      errors.companyName
                        ? "border-red-500 focus:border-red-500"
                        : "border-slate-300 focus:border-teal-500"
                    }`}
                    placeholder="your organization name"
                  /> */}
                  <select
                   value={formData.aoa}
                   onChange={handleChange}
                    className={`w-full px-0 py-2 border-b-2 focus:outline-none bg-transparent text-slate-900 transition-colors placeholder-slate-400 ${
                      errors.companyName
                        ? "border-red-500 focus:border-red-500"
                        : "border-slate-300 focus:border-teal-500"
                    }`}
                    name="aoa"
                  >
                    <option value={'Environment'}>Environment</option>
                    <option value={'Social'}>Social</option>
                    <option value={'Climate Change impact'}>Climate Change impact</option>
                    <option value={'Others'}>Others</option>
                  </select>
                  {errors.companyName && (
                    <p className="text-red-500 text-xs mt-1">{errors.aoa}</p>
                  )}
                </div>
                <div>
                  {formData.aoa == "Others" && (
                    <input
                      type="text"
                      name="aoaOther"
                      value={formData.aoaOther}
                      onChange={handleChange}
                      placeholder="Please specify"
                      className={`w-full px-0 py-2 mt-4 border-b-2 focus:outline-none bg-transparent text-slate-900 ${
                        errors.aoaOther
                          ? "border-red-500 focus:border-red-500"
                          : "border-slate-300 focus:border-teal-500"
                      }`}
                    />
                  )}
                  {errors.aoaOther && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.aoaOther}
                    </p>
                  )}
                </div>
                
              </motion.div>

              <motion.div>
                <div>
                  {formData.aoa == "Other" && (
                    <input
                      type="text"
                      name="aoaOther"
                      value={formData.aoaOther}
                      onChange={handleChange}
                      placeholder="Please specify"
                      className={`w-full px-0 py-2 mt-4 border-b-2 focus:outline-none bg-transparent text-slate-900 ${
                        errors.aoaOther
                          ? "border-red-500 focus:border-red-500"
                          : "border-slate-300 focus:border-teal-500"
                      }`}
                    />
                  )}
                  {errors.aoaOther && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.aoaOther}
                    </p>
                  )}
                </div>
              </motion.div>

              

              {/* Message */}
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-semibold text-slate-900 mb-2">
                  Message{" "}
                  <span className="text-sm font-outfit text-red-800">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className={`w-full px-0 py-2 border-b-2 focus:outline-none bg-transparent text-slate-900 transition-colors placeholder-slate-400 resize-none ${
                    errors.message
                      ? "border-red-500 focus:border-red-500"
                      : "border-slate-300 focus:border-teal-500"
                  }`}
                  placeholder="Tell us more about your company and services you are interested in..."
                />
                {errors.message && (
                  <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                )}
              </motion.div>

              {/* Checkboxes */}
              <motion.div variants={itemVariants} className="space-y-4 py-2">
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    name="subscribe"
                    checked={formData.subscribe}
                    onChange={handleChange}
                    className="w-5 h-5 mt-0.5 rounded border-2 border-slate-300 focus:border-teal-500 cursor-pointer accent-teal-500 transition-colors"
                  />
                  <span className="text-sm text-slate-700 group-hover:text-slate-900 transition-colors">
                    Subscribe to our newsletter for news and updates
                  </span>
                </label>

                <label className="flex items-start gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    name="terms"
                    checked={formData.terms}
                    onChange={handleChange}
                    className="w-5 h-5 mt-0.5 rounded border-2 border-slate-300 focus:border-teal-500 cursor-pointer accent-teal-500 transition-colors"
                  />
                  <span className="text-sm text-slate-700 group-hover:text-slate-900 transition-colors">
                    I agree to the{" "}
                    <a
                      href="#"
                      className="font-semibold text-teal-500 hover:text-teal-500 transition-colors"
                    >
                      Terms and Conditions
                    </a>
                  </span>
                </label>
                {errors.terms && (
                  <p className="text-red-500 text-xs">{errors.terms}</p>
                )}
              </motion.div>
            </motion.form>
          </motion.div>

          {/* Contact Info Section */}

          <motion.div
            className="text-md bg-[#222] mr-auto mt-[-24px] w-[121px] cursor-pointer text-white font-outfit rounded-sm px-5 py-2 flex justify-center items-center "
            onClick={handleSubmit}
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Sending...
              </>
            ) : submitted ? (
              <>
                <Check className="w-5 h-5" />
                Message Sent!
              </>
            ) : (
              "Send"
            )}
          </motion.div>
        </div>
      </div>
    </main>
  );
}
