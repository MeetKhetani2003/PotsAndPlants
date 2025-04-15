import { motion, useAnimation, useInView } from 'framer-motion';
import React, { useRef, useEffect } from 'react';

import BenefitsSection from './components/molicules/Benifits';
import ContactAndFooter from './components/molicules/Contact';
import Cursor from './components/molicules/Cursor';
import Hero from './components/molicules/Hero';
import MarqueeComponent from './components/molicules/MarqueeComponent';
import NavBar from './components/molicules/NavBar';
import ProductCard from './components/molicules/Product';
import TestimonialSection from './components/molicules/Testimonial';

// Animation variants for sections
const sectionVariants = {
  hidden: { opacity: 0, y: 30 }, // Reduced y offset for faster feel
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6, // Slightly faster than 0.8
      ease: 'easeOut',
    },
  },
};

const App = () => {
  return (
    <>
      <Cursor />
      <main className='relative'>
        <NavBar />
        <Section id='hero'>
          <Hero />
        </Section>
        <Section id='marquee'>
          <h2 className='text-3xl mt-6 font-marcellus font-semibold text-gray-800 mb-6 text-center'>
            Delivered more than 100+ Projects
          </h2>
          <MarqueeComponent />
        </Section>
        <Section id='plants'>
          <ProductCard />
        </Section>
        <Section id='benifits'>
          <BenefitsSection />
        </Section>
        <Section id='testimonials'>
          <TestimonialSection />
        </Section>
        <footer id='contact'>
          <Section>
            <ContactAndFooter />
          </Section>
        </footer>
      </main>
    </>
  );
};

// Reusable Section component with motion effects
const Section = ({ children, id }) => {
  const ref = useRef(null);
  const controls = useAnimation();
  const inView = useInView(ref, {
    triggerOnce: false, // Changed back to true for performance
    threshold: 0.9, // Adjusted to 30% for earlier trigger
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden'); // Reset to hidden when out of view (optional)
    }
  }, [controls, inView]);

  return (
    <motion.section
      ref={ref}
      id={id}
      initial='hidden'
      animate={controls}
      variants={sectionVariants}
    >
      {children}
    </motion.section>
  );
};

export default App;
