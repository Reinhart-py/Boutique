
import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Star, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Featured products (first 5)
  const featuredProducts = products.slice(0, 5);

  useEffect(() => {
    // Create floating particles
    const createParticle = () => {
      const particle = document.createElement('div');
      particle.className = 'particle fixed pointer-events-none z-10';
      particle.style.left = Math.random() * window.innerWidth + 'px';
      particle.style.top = window.innerHeight + 'px';
      document.body.appendChild(particle);

      // Animate particle
      const animation = particle.animate([
        { transform: 'translateY(0px) scale(0)', opacity: 0 },
        { transform: 'translateY(-100vh) scale(1)', opacity: 1 },
        { transform: 'translateY(-200vh) scale(0)', opacity: 0 }
      ], {
        duration: 8000 + Math.random() * 4000,
        easing: 'ease-out'
      });

      animation.onfinish = () => {
        particle.remove();
      };
    };

    // Create particles periodically
    const intervalId = setInterval(createParticle, 3000);
    
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-background overflow-hidden">
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        className="relative h-screen flex items-center justify-center"
        style={{ y, opacity }}
      >
        {/* Background Image with Parallax */}
        <div className="absolute inset-0">
          <motion.div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=1920&h=1080&fit=crop')`
            }}
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 12, ease: "easeOut" }}
          />
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, Math.random() * 20 - 10, 0],
                rotate: [0, 360],
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            >
              <Sparkles className="text-gold-400/30" size={Math.random() * 20 + 10} />
            </motion.div>
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
          <motion.div
            className="mb-6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Star className="text-gold-400 mx-auto mb-4" size={40} />
          </motion.div>

          <motion.h1
            className="text-7xl md:text-9xl font-playfair font-bold text-gradient mb-8 leading-tight"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          >
            Jeet Davindra
          </motion.h1>
          
          <motion.h2
            className="text-4xl md:text-6xl font-dm-serif text-gold-300 mb-12"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
          >
            Boutique
          </motion.h2>

          <motion.p
            className="text-xl md:text-2xl text-muted-foreground mb-16 max-w-3xl mx-auto leading-relaxed"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
          >
            Where timeless elegance meets contemporary fashion. Discover our curated collection of premium pieces crafted for the sophisticated soul.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.1, ease: "easeOut" }}
          >
            <Link to="/collection">
              <motion.button
                className="professional-button flex items-center space-x-2 text-lg px-8 py-4"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(245, 158, 11, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Explore Collection</span>
                <ArrowRight size={20} />
              </motion.button>
            </Link>
            
            <Link to="/about">
              <motion.button
                className="px-8 py-4 border-2 border-gold-400 text-gold-400 font-semibold rounded-xl text-lg hover:bg-gold-400 hover:text-black transition-all duration-300 group luxury-card"
                whileHover={{ 
                  scale: 1.05,
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="group-hover:tracking-wider transition-all duration-300">
                  Our Story
                </span>
              </motion.button>
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        >
          <div className="w-6 h-12 border-2 border-gold-400 rounded-full flex justify-center glass-effect">
            <motion.div
              className="w-1 h-4 bg-gold-gradient rounded-full mt-2"
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </motion.section>

      {/* Featured Products Section */}
      <section className="py-32 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center space-x-2 mb-6"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Star className="text-gold-400" size={30} />
              <h2 className="text-6xl font-playfair font-bold text-gradient">
                Signature Collection
              </h2>
              <Star className="text-gold-400" size={30} />
            </motion.div>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Handpicked pieces that define elegance and sophistication, each telling its own story of craftsmanship and beauty.
            </p>
            
            {/* Decorative Line */}
            <motion.div
              className="w-40 h-1 bg-gold-gradient mx-auto mt-8 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 160 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.5 }}
            />
          </motion.div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {featuredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-32 px-4 relative">
        <motion.div
          className="max-w-5xl mx-auto text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="luxury-card p-16 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 10 + Math.random() * 5,
                    repeat: Infinity,
                    delay: Math.random() * 3,
                  }}
                >
                  <Star className="text-gold-400" size={20} />
                </motion.div>
              ))}
            </div>
            
            <div className="relative z-10">
              <h3 className="text-5xl font-playfair font-bold text-gradient mb-8">
                Experience Luxury Fashion
              </h3>
              <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto">
                Step into a world where every piece tells a story of craftsmanship, elegance, and timeless beauty. Your journey to sophistication begins here.
              </p>
              <Link to="/contact">
                <motion.button
                  className="professional-button text-xl px-12 py-5 inline-flex items-center space-x-3"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 25px 50px rgba(245, 158, 11, 0.4)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Visit Our Boutique</span>
                  <Sparkles size={24} />
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
