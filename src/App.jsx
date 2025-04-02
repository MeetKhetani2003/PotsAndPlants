import React from 'react';

import Cursor from './components/molicules/Cursor';
import Hero from './components/molicules/Hero';
import MarqueeComponent from './components/molicules/MarqueeComponent';
import NavBar from './components/molicules/NavBar';
import ProductCard from './components/molicules/Product';

const App = () => {
  return (
    <>
      {/* <Cursor /> */}
      <main className='relative'>
        <NavBar />
        <section id='hero'>
          <Hero />
        </section>
        <MarqueeComponent />
        <section>
          <ProductCard />
        </section>
      </main>
    </>
  );
};

export default App;
