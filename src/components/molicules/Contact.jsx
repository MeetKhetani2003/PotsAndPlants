import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from 'react-icons/fa';
import { motion } from 'framer-motion';

const contactVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

export default function ContactAndFooter() {
  return (
    <>
      <motion.section
        className='py-16'
        variants={contactVariants}
        initial='hidden'
        animate='visible'
      >
        <h2 className='text-3xl font-marcellus font-semibold text-gray-800 mb-6 text-center'>
          Contact Us
        </h2>
        <div className='max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10'>
          <motion.div
            className='bg-white p-6 rounded-lg shadow-lg'
            whileHover={{ scale: 1.02 }}
          >
            <h2 className='text-3xl font-marcellus font-bold text-gray-900'>
              Get in Touch
            </h2>
            <p className='text-orange-600 mt-2 text-lg'>
              We’d love to hear from you!
            </p>
            <div className='mt-6 space-y-4'>
              <div className='flex items-center text-gray-700'>
                <FaPhone className='text-orange-500 text-xl mr-3' />
                <span className='text-lg'>+123 456 7890</span>
              </div>
              <div className='flex items-center text-gray-700'>
                <FaEnvelope className='text-orange-500 text-xl mr-3' />
                <span className='text-lg'>hello@example.com</span>
              </div>
              <div className='flex items-center text-gray-700'>
                <FaMapMarkerAlt className='text-orange-500 text-xl mr-3' />
                <span className='text-lg'>123 Main Street, City, Country</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            className='bg-white p-6 rounded-lg shadow-lg'
            whileHover={{ scale: 1.02 }}
          >
            <h2 className='text-3xl font-marcellus font-bold text-gray-900'>
              Send Us a Message
            </h2>
            <form className='mt-6'>
              <input
                type='text'
                placeholder='Your Name'
                className='w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 mb-4'
              />
              <input
                type='email'
                placeholder='Your Email'
                className='w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 mb-4'
              />
              <textarea
                placeholder='Your Message'
                rows='4'
                className='w-full p-植物3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 mb-4'
              />
              <button className='bg-orange-500 text-white py-3 px-6 rounded-lg hover:bg-orange-600 transition w-full'>
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </motion.section>

      <motion.footer
        className='bg-orange-600 text-white py-8'
        variants={contactVariants}
        initial='hidden'
        animate='visible'
      >
        <div className='max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8'>
          <div>
            <h3 className='text-2xl font-marcellus font-bold'>PlantStore</h3>
            <p className='mt-2 text-gray-200'>
              Providing the best plants with love and dedication.
            </p>
          </div>
          <div>
            <h4 className='text-xl font-marcellus font-semibold'>
              Quick Links
            </h4>
            <ul className='mt-2 space-y-2'>
              <li>
                <a href='#hero' className='hover:underline'>
                  Home
                </a>
              </li>
              <li>
                <a href='#about' className='hover:underline'>
                  About
                </a>
              </li>
              <li>
                <a href='#plants' className='hover:underline'>
                  Shop
                </a>
              </li>
              <li>
                <a href='#contact' className='hover:underline'>
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className='text-xl font-marcellus font-semibold'>Follow Us</h4>
            <div className='flex space-x-4 mt-3'>
              <a href='#' className='hover:text-gray-300'>
                <FaFacebook size={24} />
              </a>
              <a href='#' className='hover:text-gray-300'>
                <FaInstagram size={24} />
              </a>
              <a href='#' className='hover:text-gray-300'>
                <FaTwitter size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className='text-center mt-8 text-gray-200'>
          © {new Date().getFullYear()} PlantStore. All rights reserved.
        </div>
      </motion.footer>
    </>
  );
}
