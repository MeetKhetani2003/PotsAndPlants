import { motion } from 'framer-motion';
import Marquee from 'react-fast-marquee';
import { FaQuoteLeft } from 'react-icons/fa';

const marqueeVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1, ease: 'easeOut' } },
};

export default function TestimonialSection() {
  const testimonials = [
    {
      name: 'John Doe',
      feedback:
        'Amazing service! My plants have never been healthier. Highly recommended!',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    {
      name: 'Sarah Smith',
      feedback:
        'A wonderful experience! The team is very professional and friendly.',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    {
      name: 'Michael Johnson',
      feedback: 'They truly care about plants! My garden looks incredible now.',
      image: 'https://randomuser.me/api/portraits/men/50.jpg',
    },
    {
      name: 'Emily Davis',
      feedback:
        'Their plant renovation service is top-notch! Highly satisfied.',
      image: 'https://randomuser.me/api/portraits/women/30.jpg',
    },
    {
      name: 'James Wilson',
      feedback:
        "I have seen a significant improvement in my plants' health! Thank you!",
      image: 'https://randomuser.me/api/portraits/men/40.jpg',
    },
  ];

  return (
    <section className='py-16'>
      <div className='mx-auto px-6 text-center'>
        <h2 className='text-3xl font-marcellus font-bold text-gray-900'>
          What Our Clients Say
        </h2>
        <p className='text-orange-600 mt-2 text-lg'>
          Real feedback from our happy customers!
        </p>
        <motion.div
          className='mt-10 overflow-hidden'
          variants={marqueeVariants}
          initial='hidden'
          animate='visible'
        >
          <Marquee
            pauseOnHover
            speed={50}
            gradient={true}
            gradientWidth={400}
            gradientColor='rgba(255, 255, 255, 0.5)'
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className='bg-white p-6 mx-4 w-80 shadow-lg rounded-2xl text-center border-t-4 border-orange-500'
              >
                <FaQuoteLeft className='text-orange-400 text-3xl mb-4 mx-auto' />
                <p className='text-gray-700 italic'>{testimonial.feedback}</p>
                <div className='mt-4 flex flex-col items-center'>
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className='w-16 h-16 rounded-full border-2 border-orange-500 shadow-md'
                  />
                  <h4 className='mt-3 font-marcellus font-semibold text-gray-900'>
                    {testimonial.name}
                  </h4>
                </div>
              </div>
            ))}
          </Marquee>
        </motion.div>
      </div>
    </section>
  );
}
