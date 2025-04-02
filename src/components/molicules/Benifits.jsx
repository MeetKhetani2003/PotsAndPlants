import { motion } from 'framer-motion';
import { FaLeaf, FaSeedling, FaTree, FaRecycle } from 'react-icons/fa';

const benefitVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function BenefitsSection() {
  const benefits = [
    {
      title: 'Smart Plant & Tree Care',
      description: 'We help keep your plants healthy and evergreen.',
      icon: <FaTree className='text-orange-600 text-3xl' />,
    },
    {
      title: 'Nursery Direct',
      description: 'Directly delivering the best plants to your doorstep.',
      icon: <FaSeedling className='text-orange-600 text-3xl' />,
    },
    {
      title: 'Plant Sentry',
      description: 'Ensuring your plants remain protected and nourished.',
      icon: <FaLeaf className='text-orange-600 text-3xl' />,
    },
    {
      title: 'Plant Renovation',
      description: 'Revive and refresh your plants with expert care.',
      icon: <FaRecycle className='text-orange-600 text-3xl' />,
    },
  ];

  return (
    <section className='py-16'>
      <h2 className='text-3xl font-marcellus font-semibold text-gray-800 mb-6 text-center'>
        Our Benefits
      </h2>
      <div className='max-w-7xl mx-auto px-6'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center'>
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className='flex flex-col items-center'
              variants={benefitVariants}
              initial='hidden'
              animate='visible'
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className='bg-orange-200 p-5 rounded-full flex items-center justify-center w-20 h-20 shadow-lg'>
                {benefit.icon}
              </div>
              <h3 className='mt-4 text-lg font-marcellus font-semibold text-gray-900'>
                {benefit.title}
              </h3>
              <p className='mt-2 text-gray-600 text-sm leading-relaxed max-w-xs'>
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
