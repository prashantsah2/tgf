"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Phone, MapPin, Check, Loader2 } from "lucide-react"

export default function QueryForm3() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    contact: "",
    message: "",
    subscribe: false,
    terms: false,
  })

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validatePhone = (phone: string) => {
    if (!phone.trim()) return false
    const phoneRegex = /^[\d\s\-+()]{10,}$/
    return phoneRegex.test(phone.replace(/\s/g, ""))
  }

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }
    if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }
    if (!validatePhone(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number (10+ digits)"
    }
    if (!validatePhone(formData.contact)) {
      newErrors.contact = "Please enter a valid contact number (10+ digits)"
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    }
    if (!formData.terms) {
      newErrors.terms = "You must agree to the terms and conditions"
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
      setTimeout(() => setSubmitted(false), 3000)
      setFormData({
        name: "",
        email: "",
        phone: "",
        contact: "",
        message: "",
        subscribe: false,
        terms: false,
      })
    }, 1500)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <main className="min-h-screen bg-white px-4 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h1 className="text-2xl md:text-3xl font-bold font-lora text-slate-900 mb-4">Get in touch</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-teal-500 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Form Section */}
          <motion.div className="lg:col-span-2" variants={containerVariants} initial="hidden" animate="visible">
            <motion.div variants={itemVariants} className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Send a Message</h2>
              <p className="text-slate-600 leading-relaxed">
                Pellentesque in ipsum id orci porta dapibus. Quisque velit nisl, pretium ut lacinia in, elementum id
                enim. Done
              </p>
            </motion.div>

            <motion.form onSubmit={handleSubmit} className="space-y-6" variants={containerVariants}>
              {/* Name and Email */}
              <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-0 py-2 border-b-2 focus:outline-none bg-transparent text-slate-900 transition-colors placeholder-slate-400 ${
                      errors.name ? "border-red-500 focus:border-red-500" : "border-slate-300 focus:border-teal-500"
                    }`}
                    placeholder="Your name"
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-0 py-2 border-b-2 focus:outline-none bg-transparent text-slate-900 transition-colors placeholder-slate-400 ${
                      errors.email ? "border-red-500 focus:border-red-500" : "border-slate-300 focus:border-teal-500"
                    }`}
                    placeholder="your@email.com"
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>
              </motion.div>

              {/* Phone and Contact */}
              <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-0 py-2 border-b-2 focus:outline-none bg-transparent text-slate-900 transition-colors placeholder-slate-400 ${
                      errors.phone ? "border-red-500 focus:border-red-500" : "border-slate-300 focus:border-teal-500"
                    }`}
                    placeholder="(123) 456-7890"
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">Contact Number</label>
                  <input
                    type="tel"
                    name="contact"
                    value={formData.contact || ""}
                    onChange={handleChange}
                    className={`w-full px-0 py-2 border-b-2 focus:outline-none bg-transparent text-slate-900 transition-colors placeholder-slate-400 ${
                      errors.contact ? "border-red-500 focus:border-red-500" : "border-slate-300 focus:border-teal-500"
                    }`}
                    placeholder="(123) 456-7890"
                  />
                  {errors.contact && <p className="text-red-500 text-xs mt-1">{errors.contact}</p>}
                </div>
              </motion.div>

              {/* Message */}
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-semibold text-slate-900 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className={`w-full px-0 py-2 border-b-2 focus:outline-none bg-transparent text-slate-900 transition-colors placeholder-slate-400 resize-none ${
                    errors.message ? "border-red-500 focus:border-red-500" : "border-slate-300 focus:border-teal-500"
                  }`}
                  placeholder="please tell us more..."
                />
                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
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
                    <a href="#" className="font-semibold text-teal-500 hover:text-teal-500 transition-colors">
                      Terms and Conditions
                    </a>
                  </span>
                </label>
                {errors.terms && <p className="text-red-500 text-xs">{errors.terms}</p>}
              </motion.div>

             
            </motion.form>
          </motion.div>

          {/* Contact Info Section */}
          <motion.div className="space-y-8 mb-[-24px]" variants={containerVariants} initial="hidden" animate="visible">
            {/* Call Us */}
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Call Us</h3>
              <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                Pellentesque in ipsum id orci porta dapibus. Quisque velit nisl, pretium ut lacinia in, elementum id
                enim. Done
              </p>
              <a
                href="tel:+12153251353"
                className="inline-flex items-center gap-2 text-teal-500 hover:text-teal-500 font-semibold transition-colors"
              >
                <Phone className="w-5 h-5" />
                (215) 325-1353
              </a>
            </motion.div>

            {/* Visit Us */}
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Visit Us</h3>
              <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                Pellentesque in ipsum id orci porta dapibus. Quisque velit nisl, pretium ut lacinia in, elementum id
                enim. Done
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-teal-500 hover:text-teal-500 font-semibold transition-colors"
              >
                <MapPin className="w-5 h-5" />
                1234 Divi St, #1111, San Francisco, CA
              </a>
            </motion.div>
          </motion.div>

          <motion.div className="text-md bg-[#222] mt-[-24px] w-[121px] cursor-pointer text-white font-outfit rounded-sm px-5 py-2 flex justify-center items-center "
           
          
                 
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
  )
}
