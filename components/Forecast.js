import React from 'react';
import Image from 'next/image';

const Forecast = ({data}) => {
  return (
    <div>
      <div className='text-left rounded bg-gradient-to-r from-red-500 to-pink-500 items-left justify-evenly'>
        <div className='p-2 z-2'>
          <div className='flex backdrop-blur-xl' >        
            <h1 className=' text-7xl'>{data.main.temp.toFixed(0)}&#176;</h1>
              <Image
                src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                alt='/'
                width='75'
                height='60'
              />
          </div>
      <div className='flex flex-col w-full '>
        <div className='flex backdrop-blur-xl '>
          <h1 className='text-xl font-medium tracking-wide text-zinc-900'>
          Feels like 
            <span> 
              {data.main.feels_like.toFixed(0)}&#176;
            </span>
         </h1>
        </div>
        
          <div className='flex backdrop-blur-xl'>
           <h1 className='text-xl font-medium tracking-wide text-zinc-900'>
           Humidity 
            <span>
              {data.main.humidity}%
            </span>
            </h1>
          </div>
       
          <div className='flex backdrop-blur-xl'>
            <h1 className='text-xl font-medium tracking-wide text-zinc-900'>
           Wind 
              <span>
              {data.wind.speed.toFixed(0)} mph  
              </span>
            </h1>
          </div>     
        </div>
      </div>
    </div>
 </div>


  );
};

export default Forecast;