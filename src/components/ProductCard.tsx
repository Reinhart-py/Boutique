
import React from 'react';
import { motion } from 'framer-motion';

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  category: string;
  description: string;
}

interface ProductCardProps {
  product: Product;
  index: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, index }) => {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-2xl bg-gradient-to-b from-gray-900 to-black shadow-2xl hover-lift"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.1,
        ease: "easeOut"
      }}
      whileHover={{ 
        scale: 1.02,
        rotateY: 5,
        transition: { duration: 0.3 }
      }}
    >
      {/* Image Container */}
      <div className="relative h-80 overflow-hidden">
        <motion.img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.7 }}
        />
        
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Category Badge */}
        <motion.div
          className="absolute top-4 left-4 px-3 py-1 bg-gold-500/90 backdrop-blur-sm text-black text-xs font-semibold rounded-full"
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: index * 0.1 + 0.3 }}
        >
          {product.category}
        </motion.div>

        {/* Floating Particles */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gold-400 rounded-full opacity-0 group-hover:opacity-70"
            style={{
              top: `${20 + i * 20}%`,
              right: `${15 + i * 10}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0, 0.7, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 + 0.4 }}
        >
          <h3 className="text-xl font-playfair font-semibold text-white group-hover:text-gold-300 transition-colors duration-300">
            {product.name}
          </h3>
          <p className="text-gray-400 text-sm mt-2 group-hover:text-gray-300 transition-colors duration-300">
            {product.description}
          </p>
        </motion.div>

        <motion.div
          className="flex items-center justify-between"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 + 0.5 }}
        >
          <span className="text-2xl font-bold text-gradient font-playfair">
            {product.price}
          </span>
          
          <motion.button
            className="px-4 py-2 bg-gold-gradient text-black font-semibold rounded-lg opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Details
          </motion.button>
        </motion.div>

        {/* Animated Border */}
        <motion.div
          className="absolute bottom-0 left-0 h-1 bg-gold-gradient"
          initial={{ width: 0 }}
          whileHover={{ width: "100%" }}
          transition={{ duration: 0.5 }}
        />
      </div>

      {/* Glow Effect */}
      <motion.div
        className="absolute inset-0 rounded-2xl border-2 border-gold-500/0 group-hover:border-gold-500/30 transition-all duration-500"
        animate={{
          boxShadow: [
            "0 0 0px rgba(245, 158, 11, 0)",
            "0 0 20px rgba(245, 158, 11, 0.3)",
            "0 0 0px rgba(245, 158, 11, 0)"
          ]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
    </motion.div>
  );
};

export default ProductCard;
