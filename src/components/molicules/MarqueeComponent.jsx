import {
  logo1,
  logo10,
  logo11,
  logo12,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
  logo7,
  logo8,
  logo9,
} from '../../assets/assets';
import React from 'react';
import Marquee from 'react-fast-marquee';

const Logo = ({ logo }) => {
  return <img className=' h-28 object-cover mx-3' src={logo} alt='Logo' />;
};
const MarqueeComponent = () => {
  return (
    <Marquee gradient={true} className='bg-orange-50'>
      <Logo logo={logo1} />
      <Logo logo={logo2} />
      <Logo logo={logo3} />
      <Logo logo={logo4} />
      <Logo logo={logo5} />
      <Logo logo={logo6} />
      <Logo logo={logo7} />
      <Logo logo={logo8} />
      <Logo logo={logo9} />
      <Logo logo={logo10} />
      <Logo logo={logo11} />
      <Logo logo={logo12} />
    </Marquee>
  );
};

export default MarqueeComponent;
