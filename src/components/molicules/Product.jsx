import { motion } from 'framer-motion';
import React from 'react';

import { img1, img2, img3 } from '../../assets/assets';

const products = [
  {
    id: 1,
    name: 'Aurora',
    oldPrice: 150,
    newPrice: 100,
    discount: 33,
    image: img1,
  },
  {
    id: 2,
    name: 'Jade Succulent',
    oldPrice: 50,
    newPrice: 40,
    discount: 20,
    image: img2,
  },
  {
    id: 3,
    name: 'Italian Stone Pine',
    oldPrice: null,
    newPrice: 200,
    discount: null,
    image: img3,
  },
];

const ProductCard = () => {
  return (
    <section className='w-full px-10 py-12 bg-gray-100'>
      <h2 className='text-3xl font-semibold text-gray-800 mb-6 text-center'>
        Featured Plants
      </h2>
      <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'>
        {products.map((product) => (
          <motion.div
            key={product.id}
            className='bg-white shadow-lg rounded-lg overflow-hidden p-4 border border-gray-200 relative'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Discount Badge */}
            {product.discount && (
              <div className='absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full'>
                -{product.discount}%
              </div>
            )}

            {/* Product Image */}
            <img
              src={product.image}
              alt={product.name}
              className='w-full h-96 object-cover rounded-md'
            />

            {/* Product Name */}
            <h3 className='text-lg font-semibold mt-4 text-gray-800'>
              {product.name}
            </h3>

            {/* Price */}
            <div className='text-gray-700 mt-2'>
              {product.oldPrice && (
                <span className='text-sm text-gray-400 line-through mr-2'>
                  ${product.oldPrice}.00
                </span>
              )}
              <span className='text-lg font-bold text-black'>
                ${product.newPrice}.00
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProductCard;
