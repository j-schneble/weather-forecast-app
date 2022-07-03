import React from 'react';
import Image from 'next/image';
import spin from '../public/search.gif';

const Spin = () => {
  return (
    <>
        <Image className='w-[200px] m-auto block'
        src={spin}
        alt='loading..'
        />

    </>
  );
};

export default Spin