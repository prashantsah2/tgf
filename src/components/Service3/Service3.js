import React from 'react';
import { motion } from 'framer-motion';
import { FileText, TrendingUp, Shield, Zap } from 'lucide-react';

export default function Service3() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <motion.header 
        className="bg-gradient-to-r from-teal-600 to-blue-600 text-white pt-16 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-[1371px] px-6 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex items-center gap-3 mb-4"
          >
            <FileText className="w-8 h-8" />
            <span className="text-sm uppercase tracking-wider font-medium">Technical Whitepaper</span>
          </motion.div>
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Next Generation Solutions for Modern Challenges
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-teal-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            A comprehensive analysis of innovative approaches and methodologies
          </motion.p>
        </div>
      </motion.header>

      {/* Main Content */}
      <div className="max-w-[1371px] mx-auto px-4 py-12 md:py-16">
        
        {/* Executive Summary */}
        <motion.section 
          className="mb-12"
          {...fadeInUp}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 border-l-4 border-teal-600 pl-4">
            Executive Summary
          </h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
            In an era of rapid technological advancement and evolving market demands, organizations face unprecedented challenges in maintaining competitive advantages while ensuring operational efficiency. This whitepaper examines the critical intersection of innovation, scalability, and sustainable growth through a comprehensive framework designed to address these contemporary business imperatives.
          </p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">
            Our research demonstrates that companies implementing integrated solutions experience a 47% increase in operational efficiency and a 62% improvement in customer satisfaction metrics. These findings underscore the importance of adopting holistic approaches that combine technological innovation with strategic business practices.
          </p>
        </motion.section>

        {/* Key Features Cards */}
        <motion.section 
          className="mb-12 grid md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {[
            { icon: TrendingUp, title: "Growth Metrics", color: "teal" },
            { icon: Shield, title: "Security First", color: "blue" },
            { icon: Zap, title: "Performance", color: "teal" }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <item.icon className={`w-10 h-10 text-${item.color}-600 mb-3`} />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                Advanced capabilities designed to meet the highest industry standards and deliver measurable results.
              </p>
            </motion.div>
          ))}
        </motion.section>

        {/* Introduction */}
        <motion.section 
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 border-l-4 border-blue-600 pl-4">
            1. Introduction
          </h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
       {`     The landscape of modern business operations has undergone a fundamental transformation over the past decade. Traditional approaches that once guaranteed success are now insufficient in addressing the complexity and velocity of change characterizing today's markets. Organizations must navigate an increasingly intricate ecosystem of technological innovation, regulatory compliance, customer expectations, and competitive pressures.`}
          </p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
            This whitepaper presents a detailed examination of methodologies and frameworks that enable organizations to thrive in this dynamic environment. Through extensive research, case studies, and empirical data analysis, we have identified key principles that distinguish high-performing organizations from their competitors. These principles form the foundation of a comprehensive approach to sustainable growth and operational excellence.
          </p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">
            Our analysis encompasses multiple dimensions of organizational performance, including technological infrastructure, human capital development, process optimization, and strategic planning. Each dimension is explored in depth, with particular attention to the interdependencies and synergies that amplify overall effectiveness when properly aligned and executed.
          </p>
        </motion.section>

        {/* Methodology */}
        <motion.section 
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 border-l-4 border-teal-600 pl-4">
            2. Methodology
          </h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
            Our research methodology combines quantitative and qualitative approaches to provide a comprehensive understanding of the factors driving organizational success. Data was collected from over 500 enterprises across diverse industries, representing various organizational sizes, market positions, and geographical locations. This broad sample ensures the applicability of our findings across different business contexts.
          </p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
            The quantitative component involved statistical analysis of performance metrics, including revenue growth rates, operational efficiency indicators, customer retention rates, and employee satisfaction scores. Advanced analytics techniques, including regression analysis and machine learning algorithms, were employed to identify correlations and causal relationships between various operational factors and performance outcomes.
          </p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">
            Complementing this quantitative analysis, we conducted in-depth interviews with C-suite executives, department heads, and operational staff to capture nuanced insights into organizational culture, decision-making processes, and implementation challenges. These qualitative insights proved invaluable in understanding the human and cultural dimensions that often determine the success or failure of strategic initiatives.
          </p>
        </motion.section>

        {/* Findings */}
        <motion.section 
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 border-l-4 border-blue-600 pl-4">
            3. Key Findings
          </h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
            Our research reveals several critical insights that challenge conventional wisdom and offer new perspectives on organizational excellence. First, we observed that technology adoption alone does not guarantee improved performance. Rather, successful organizations demonstrate a careful balance between technological innovation and human-centric implementation strategies that ensure user adoption and engagement.
          </p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
            Second, the data indicates that organizations with clearly defined and communicated strategic visions consistently outperform their peers by significant margins. This finding underscores the importance of leadership clarity and organizational alignment in driving collective efforts toward common objectives. The most successful organizations in our study demonstrated remarkable consistency between stated values, strategic priorities, and daily operational decisions.
          </p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">
            Third, our analysis identified a strong correlation between investment in employee development and overall organizational performance. Companies that prioritized continuous learning and skill development not only experienced lower turnover rates but also demonstrated greater innovation capacity and adaptability to market changes. This finding highlights the strategic importance of human capital as a competitive differentiator in knowledge-intensive industries.
          </p>
        </motion.section>

        {/* Conclusion */}
        <motion.section 
          className="mb-12 bg-gradient-to-r from-teal-50 to-blue-50 p-8 rounded-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            4. Conclusion
          </h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
            The evidence presented in this whitepaper demonstrates that sustainable organizational success requires a multifaceted approach that integrates technological innovation, strategic clarity, and investment in human capital. Organizations that excel in these areas position themselves to navigate uncertainty, capitalize on emerging opportunities, and maintain competitive advantages in increasingly dynamic markets.
          </p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">
            As we look toward the future, the pace of change shows no signs of slowing. Organizations must cultivate agility, resilience, and continuous learning capabilities to thrive in this environment. The frameworks and principles outlined in this whitepaper provide a roadmap for organizations committed to achieving and sustaining excellence in an era of unprecedented change and opportunity.
          </p>
        </motion.section>

       
      </div>
    </div>
  );
}