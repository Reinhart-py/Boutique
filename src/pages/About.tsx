
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const timelineItems = [
    {
      year: "2015",
      title: "The Beginning",
      description: "Started with a vision to bring premium fashion to discerning customers"
    },
    {
      year: "2018", 
      title: "Expansion",
      description: "Opened our flagship boutique with curated collections from global designers"
    },
    {
      year: "2021",
      title: "Digital Innovation",
      description: "Launched our online presence to reach fashion enthusiasts worldwide"
    },
    {
      year: "2024",
      title: "Today",
      description: "Continuing to redefine luxury fashion with personalized experiences"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black pt-28 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl font-playfair font-bold text-gradient mb-6">
            Our Story
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A journey of passion, craftsmanship, and dedication to bringing you the finest in luxury fashion.
          </p>
        </motion.div>

        {/* Brand Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-playfair font-bold text-white mb-6">
              Crafting <span className="text-gradient">Excellence</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              At Jeet Davindra Boutique, we believe that fashion is more than just clothing—it's an expression of individuality, confidence, and artistic vision. Our journey began with a simple yet profound mission: to curate exceptional pieces that celebrate the beauty of craftsmanship and the power of personal style.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Every piece in our collection is carefully selected for its quality, design, and ability to make you feel extraordinary. We work with talented designers and artisans who share our commitment to excellence and attention to detail.
            </p>
            
            <motion.div
              className="flex space-x-8 pt-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="text-center">
                <div className="text-3xl font-playfair font-bold text-gradient">500+</div>
                <div className="text-gray-400 text-sm">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-playfair font-bold text-gradient">9</div>
                <div className="text-gray-400 text-sm">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-playfair font-bold text-gradient">50+</div>
                <div className="text-gray-400 text-sm">Designer Partners</div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=800&fit=crop"
                alt="Boutique Interior"
                className="w-full h-96 object-cover hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            
            {/* Floating Elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-24 h-24 bg-gold-gradient rounded-full opacity-20 blur-xl"
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360]
              }}
              transition={{ duration: 8, repeat: Infinity }}
            />
            <motion.div
              className="absolute -bottom-4 -left-4 w-16 h-16 bg-rose-gradient rounded-full opacity-20 blur-lg"
              animate={{ 
                scale: [1.2, 1, 1.2],
                rotate: [360, 180, 0]
              }}
              transition={{ duration: 6, repeat: Infinity }}
            />
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-playfair font-bold text-center text-gradient mb-12">
            Our Journey
          </h2>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-gold-400 to-gold-600 rounded-full"></div>
            
            <div className="space-y-12">
              {timelineItems.map((item, index) => (
                <motion.div
                  key={item.year}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="glass-effect rounded-xl p-6 border border-gold-500/20 hover-lift">
                      <div className="text-2xl font-playfair font-bold text-gradient mb-2">
                        {item.year}
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-3">
                        {item.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Timeline Node */}
                  <div className="w-2/12 flex justify-center">
                    <motion.div
                      className="w-6 h-6 bg-gold-gradient rounded-full border-4 border-black shadow-lg"
                      whileHover={{ scale: 1.5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    />
                  </div>
                  
                  <div className="w-5/12"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          className="glass-effect rounded-3xl p-12 border border-gold-500/20"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-playfair font-bold text-center text-gradient mb-12">
            Our Values
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Quality",
                description: "We never compromise on the quality of materials and craftsmanship in every piece we offer.",
                icon: "💎"
              },
              {
                title: "Style",
                description: "Curating timeless pieces that transcend trends and celebrate individual expression.",
                icon: "✨"
              },
              {
                title: "Service",
                description: "Providing personalized attention and exceptional service to every customer who walks through our doors.",
                icon: "👑"
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                className="text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <motion.div
                  className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: index * 0.5 }}
                >
                  {value.icon}
                </motion.div>
                <h3 className="text-2xl font-playfair font-bold text-white mb-4 group-hover:text-gold-300 transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
