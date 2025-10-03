import { motion } from 'framer-motion';

const Carbon1 = () => {
  const cards = [
    {
      title: 'Carbon Footprint',
      price: '$50.00',
      description: `Our carbon footprint services encompass a thorough analysis of carbon emissions across project boundary, adhering to the GHG Protocol and ISO 14064 guidelines. Our GHG accounting covers all 7 greenhouse gases across Scope 1and 2 emissions. Additionally, we delve into the broader supply chain and operational activities to capture Scope 3 emissions, including upstream and downstream impacts. Our comprehensive approach provides a holistic view of your carbon footprint, enabling strategic decision-making for emission reduction initiatives and sustainability strategies. Furthermore, our detailed and customer-centric reporting ensures that our findings are presented in a clear, understandable manner, tailored to meet each client's unique needs and preferences.`,
      buttonText: 'Read more'
    },
    {
      title: 'Carbon Footprint Tool',
      price: '$100.00',
      description:`Enscope is our indigenous carbon footprint tool that empowers businesses to take proactive steps towards sustainability by providing comprehensive insights into their environmental impact. With intuitive data collection and analysis capabilities, the platform enables companies to accurately measure their carbon emissions across operations and supply chains. Armed with this knowledge, businesses can identify areas for improvement and implement targeted strategies to reduce their carbon footprint, contributing to global efforts to combat climate change. Enscope's user-friendly interface and actionable recommendations make it an invaluable tool for organizations committed to environmental responsibility, fostering a greener and more sustainable future for all.`,
      buttonText: 'Read more'
    },
    {
      title: 'Carbon Footprint Assurance',
      price: '$150.00',
      description: `We are an internationally accredited carbon footprint assurance service provider. Our footprint assurance services provide independent verification and validation of your carbon footprint and GHG emissions data, aligning with ISAE 3000 and AA1000AS assurance standards. Through rigorous examination and analysis, we ensure the integrity and reliability of your environmental reporting, enhancing credibility and transparency for stakeholders. Our assurance process offers limited, reasonable and high level confidence in the accuracy of your footprint calculations across Scope 1, 2, and 3 emissions, empowering you to demonstrate accountability and commitment to sustainability goals with credibility backed by recognized assurance standards. Our reports are meticulously crafted to meet the satisfaction of our clients, providing comprehensive insights and assurances in a format that meets their specific needs and preferences.`,
      buttonText: 'Read more'
    }
  ];

  return (
    <div className="min-h-screen w-full pt-24 pb-24">
      <div className="max-w-[1371px] mx-auto flex flex-col ">
        <motion.h1 
          className="text-4xl font-bold text-gray-800 mb-12 text-left"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
         Carbon Footprint
        </motion.h1>
        
        <div className="grid grid-cols-1 md:grid-cols-1 gap-3">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              className="bg-gray-50 rounded-lg p-6 shadow-sm border border-gray-200"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="mb-4">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  {card.title}
                </h2>
              </div>
              
              <div className="mb-6">
                <p className="text-sm text-gray-600 leading-relaxed">
                  {card.description}
                </p>
              </div>
              
              <motion.button
                className="w-full bg-[#222] max-w-[121px]  text-white py-3 px-4 rounded-md text-sm font-medium hover:bg-green-700 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {card.buttonText}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carbon1;