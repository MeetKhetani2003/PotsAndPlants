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
        className='py-20 bg-gray-50'
        variants={contactVariants}
        initial='hidden'
        animate='visible'
      >
        <h2 className='text-4xl font-marcellus font-semibold text-gray-800 mb-10 text-center'>
          Contact Us
        </h2>
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12'>
          <motion.div
            className='bg-white p-8 rounded-xl shadow-lg'
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className='text-3xl font-marcellus font-bold text-gray-900'>
              Get in Touch
            </h2>
            <p className='text-orange-600 mt-3 text-lg'>
              We’re here to assist you!
            </p>
            <div className='mt-8 space-y-6'>
              <div className='flex items-center text-gray-700'>
                <FaPhone className='text-orange-500 text-xl mr-4' />
                <span className='text-lg'>7760340416</span>
              </div>
              <div className='flex items-center text-gray-700'>
                <FaEnvelope className='text-orange-500 text-xl mr-4' />
                <span className='text-lg'>Sales@mahatvi.com</span>
              </div>
              <div className='flex items-center text-gray-700'>
                <FaMapMarkerAlt className='text-orange-500 text-xl mr-4' />
                <span className='text-lg'>
                  1033, 24th Main, 1st Sector, HSR Layout, Bengaluru - 560102
                </span>
              </div>
            </div>
          </motion.div>
          <motion.div
            className='bg-white p-8 rounded-xl shadow-lg'
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className='text-3xl font-marcellus font-bold text-gray-900'>
              Send Us a Message
            </h2>
            <form className='mt-8 space-y-5'>
              <input
                type='text'
                placeholder='Your Name'
                className='w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none transition'
                required
              />
              <input
                type='email'
                placeholder='Your Email'
                className='w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none transition'
                required
              />
              <textarea
                placeholder='Your Message'
                rows='5'
                className='w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none transition'
                required
              />
              <button
                type='submit'
                className='bg-orange-500 text-white py-3 px-6 rounded-lg hover:bg-orange-600 transition w-full font-medium'
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </motion.section>

      <motion.footer
        className='bg-orange-600 text-white py-12'
        variants={contactVariants}
        initial='hidden'
        animate='visible'
      >
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-12'>
          <div>
            <h3 className='text-3xl font-marcellus font-bold'>
              Mahatvi Industry Private Ltd
            </h3>
            <p className='mt-3 text-gray-200 leading-relaxed'>
              Delivering excellence with innovation and commitment.
            </p>
          </div>
          <div>
            <h4 className='text-xl font-marcellus font-semibold'>
              Quick Links
            </h4>
            <ul className='mt-4 space-y-3'>
              <li>
                <a
                  href='#hero'
                  className='hover:underline hover:text-gray-200 transition'
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href='#about'
                  className='hover:underline hover:text-gray-200 transition'
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href='#services'
                  className='hover:underline hover:text-gray-200 transition'
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href='#contact'
                  className='hover:underline hover:text-gray-200 transition'
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className='text-xl font-marcellus font-semibold'>Follow Us</h4>
            <div className='flex space-x-6 mt-4'>
              <a href='#' className='hover:text-gray-300 transition'>
                <FaFacebook size={28} />
              </a>
              <a href='#' className='hover:text-gray-300 transition'>
                <FaInstagram size={28} />
              </a>
              <a href='#' className='hover:text-gray-300 transition'>
                <FaTwitter size={28} />
              </a>
            </div>
          </div>
        </div>
        <div className='text-center mt-12 text-gray-200 text-sm'>
          © {new Date().getFullYear()} Mahatvi Industry Private Ltd. All rights
          reserved.
        </div>
      </motion.footer>
    </>
  );
}
