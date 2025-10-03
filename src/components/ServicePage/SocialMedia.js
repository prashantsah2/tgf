import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Phone, Mail, ArrowRight, BarChart3, Rocket, Users, Star, Clock, Target, TrendingUp } from 'lucide-react';
import Image from 'next/image';

const SocialMedia = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        duration: 0.6
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const services = [
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Enhance Your Online Presence",
      description: "Create a professional, branded website that sets you apart and builds trust with your audience.",
      color: "from-green-500/20 to-emerald-500/20"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Boost Conversions",
      description: "Design every element of your site with intention in mind and guiding visitors toward action, whether buying, booking, or contacting you.",
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Stay Future-Ready",
      description: "We build flexible, scalable websites that can grow with your business and adapt to new needs without starting from scratch.",
      color: "from-purple-500/20 to-pink-500/20"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0906bd] relative overflow-hidden">


       <div className="absolute inset-0 opacity-20 -z-0">
        <svg width="100%" height="100%" className="w-full h-full">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <motion.div 
          className="absolute top-10 sm:top-20 left-4 sm:left-10 w-20 sm:w-32 h-20 sm:h-32 bg-green-400/10 rounded-full blur-xl"
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-10 sm:bottom-20 right-4 sm:right-10 w-32 sm:w-48 h-32 sm:h-48 bg-blue-400/10 rounded-full blur-xl"
          animate={{
            y: [20, -20, 20],
            x: [10, -10, 10]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

   

      <motion.div 
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center mb-16 sm:mb-20 lg:mb-24 z-30">
          {/* Left Column - Text Content */}
          <div className="order-2 lg:order-1">
            <motion.div variants={itemVariants} className="mb-6">
              <div className="inline-flex items-center gap-2 bg-green-500/20 px-4 py-2 rounded-full border border-green-400/30 mb-6">
                <Target className="w-4 h-4 text-green-400" />
                <span className="text-green-400 font-medium text-sm">Social Media Management</span>
              </div>
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-tight mb-6"
            >
              Why Social Media Management is{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300">
                Essential
              </span>{' '}
              for Startups and Small Businesses
            </motion.h1>

            <motion.div variants={itemVariants} className="mb-8">
              <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
                Social media is one of the most effective channels for building brand visibility and customer trust. However, for startups and small businesses, managing it consistently can be both challenging and time-intensive. 
              </p>
              <br />
              <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
                With the right social media management partner, your profiles remain active with fresh, engaging, and brand-focused content while you concentrate on growing your business. We take care of the strategy, content creation, scheduling, and audience engagement—ensuring your brand stays relevant and top of mind.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-green-500 to-emerald-400 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                Start Growing Today
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white/30 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-white/10 transition-colors backdrop-blur-sm"
              >
                View Portfolio
              </motion.button>
            </motion.div>
          </div>

          {/* Right Column - Illustration Space */}
          <motion.div 
            variants={itemVariants}
            className="order-1 lg:order-2"
          >
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 p-8 sm:p-12 lg:p-16 h-64 sm:h-80 lg:h-96 flex items-center justify-center">
              <div className="text-center">
               <Image
                 src="/image/blazestore.in__9_-removebg-preview.png"
                 alt="Social Media Management"
                 width={200}
                 height={200}
                 className="mx-auto w-full h-full"
               />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Services Section */}
        <motion.div variants={itemVariants} className="mb-16 sm:mb-20">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
              Our Core Services
            </h2>
            <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
              Comprehensive solutions designed to elevate your social media presence
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`bg-gradient-to-br ${service.color} backdrop-blur-lg p-6 sm:p-8 rounded-2xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300`}
              >
                {/* Illustration Space */}
                <div className="bg-white/10 rounded-2xl h-32 sm:h-40 mb-6 flex items-center justify-center border border-white/10">
                  <div className="text-center">
                    <div className="text-green-400 mb-2">
                      {service.icon}
                    </div>
                    <p className="text-white/60 text-xs sm:text-sm">
                      [Service Illustration {index + 1}]
                    </p>
                  </div>
                </div>

                <h3 className="text-green-400 font-bold text-lg sm:text-xl mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Process Section */}
        <motion.div variants={itemVariants} className="mb-16 sm:mb-20">
          <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 backdrop-blur-lg p-6 sm:p-8 lg:p-12 rounded-3xl border border-white/20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6">
                  Our Proven Process
                </h2>
                <div className="space-y-4">
                  {[
                    { step: "01", title: "Strategy Development", desc: "Analyze your brand and create a tailored social media strategy" },
                    { step: "02", title: "Content Creation", desc: "Design engaging posts that resonate with your target audience" },
                    { step: "03", title: "Community Management", desc: "Engage with your followers and build lasting relationships" },
                    { step: "04", title: "Performance Tracking", desc: "Monitor results and optimize for better engagement" }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10"
                    >
                      <div className="w-8 h-8 bg-green-400 text-black rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                        {item.step}
                      </div>
                      <div>
                        <h4 className="text-white font-semibold text-base sm:text-lg mb-1">{item.title}</h4>
                        <p className="text-gray-300 text-sm sm:text-base">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Process Illustration Space */}
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl h-64 sm:h-80 lg:h-96 flex items-center justify-center border border-white/20">
                <div className="text-center">
                  <Image
                 src="/image/blazestore.in__6_-removebg-preview.png"
                 alt="Social Media Management"
                 width={200}
                 height={200}
                 className="mx-auto w-full h-full"
               />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div variants={itemVariants} className="mb-16 sm:mb-20">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
              Proven Results
            </h2>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { number: "300+", label: "Brands Managed", icon: <Target className="w-6 h-6" /> },
              { number: "2.5M+", label: "Followers Gained", icon: <Users className="w-6 h-6" /> },
              { number: "150%", label: "Avg. Engagement Boost", icon: <TrendingUp className="w-6 h-6" /> },
              { number: "24/7", label: "Support Available", icon: <Clock className="w-6 h-6" /> }
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center bg-white/10 backdrop-blur-lg p-4 sm:p-6 rounded-2xl border border-white/20 hover:border-green-400/30 transition-all duration-300"
              >
                <div className="text-green-400 flex justify-center mb-2">
                  {stat.icon}
                </div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-1 sm:mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-xs sm:text-sm lg:text-base font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials Section */}
        <motion.div variants={itemVariants} className="mb-16 sm:mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Testimonial Illustration Space */}
          {/*   <div className="order-2 lg:order-1">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl h-48 sm:h-64 lg:h-80 flex items-center justify-center border border-white/20">
                <div className="text-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-yellow-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="w-8 h-8 sm:w-10 sm:h-10 text-yellow-400" />
                  </div>
                  <p className="text-white/60 text-sm sm:text-base">
                    [Client Testimonial Illustration]
                    <br />
                    Success Stories
                  </p>
                </div>
              </div>
            </div> */}

        {/*     <div className="order-1 lg:order-2">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6">
                What Our Clients Say
              </h2>
              <div className="bg-white/10 backdrop-blur-lg p-6 sm:p-8 rounded-2xl border border-white/20 mb-6">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-white text-base sm:text-lg leading-relaxed mb-4">
               {`   "Their social media management transformed our online presence completely. We saw a 200% increase in engagement within just 3 months!"`}
                </p>
                <div className="text-green-400 font-semibold">
                  - Sarah Johnson, Startup Founder
                </div>
              </div>
            </div> */}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div variants={itemVariants} className="text-center">
          <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-lg p-8 sm:p-12 lg:p-16 rounded-3xl border border-white/20">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Social Media?
            </h2>
            <p className="text-gray-300 text-base sm:text-lg mb-8 max-w-2xl mx-auto">
            {`  Let's discuss how we can help your business grow through strategic social media management.`}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-green-500 to-emerald-400 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-colors backdrop-blur-sm"
              >
                View Pricing
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Mobile Contact Section */}
        <motion.div variants={itemVariants} className="lg:hidden mt-12 sm:mt-16">
          <h3 className="text-xl sm:text-2xl font-bold text-white text-center mb-6">
            Get In Touch
          </h3>
          <div className="flex justify-center space-x-4 sm:space-x-6">
            {[
              { icon: <MessageCircle className="w-5 h-5" />, label: "WhatsApp", color: "bg-green-500" },
              { icon: <Phone className="w-5 h-5" />, label: "Call", color: "bg-blue-500" },
              { icon: <Mail className="w-5 h-5" />, label: "Email", color: "bg-purple-500" }
            ].map((contact, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`${contact.color} p-4 rounded-2xl cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center gap-2 min-w-[80px]`}
              >
                <span className="text-white">{contact.icon}</span>
                <span className="text-white text-xs font-medium">{contact.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom accent */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 2, delay: 1 }}
      />
    </div>
  );
};

export default SocialMedia;