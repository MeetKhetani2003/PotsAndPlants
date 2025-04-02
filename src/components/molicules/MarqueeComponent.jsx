import React from 'react';
import Marquee from 'react-fast-marquee';

import { logo1 } from '../../assets/assets';

const Logo = ({ logo }) => {
  return <img className='w-48 object-cover h-48 mx-3' src={logo} alt='Logo' />;
};
const MarqueeComponent = () => {
  return (
    <Marquee gradient={true}>
      <Logo logo={logo1} />
      <Logo logo={logo1} />
      <Logo logo={logo1} />
      <Logo logo={logo1} />
      <Logo logo={logo1} />
      <Logo logo={logo1} />
      <Logo logo={logo1} />
      <Logo logo={logo1} />
    </Marquee>
  );
};

export default MarqueeComponent;
