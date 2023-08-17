import React from 'react';
import Image from 'next/image';

const Forecast = ({data}) => {
  return (
    <div>
      <div className='text-left rounded-xl bg-gradient-to-r from-red-500 to-pink-500 items-left justify-evenly'>
      <div className='asdf'>
     <div className='top-0 flex pl-1 left-1'>
     <Image
                src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                alt='/'
                width='55'
                height='50'
              />
     </div>
        <div className='px-4 mb-2 z-2'>   
          <div className='flex items-center justify-center text-center ' >        
            <h1 className=' text-7xl'>{data.main.temp.toFixed(0)}&#176;</h1>            
          </div>
      <div className='grid items-center w-full grid-cols-3 gap-6 px-2 mt-2 text-center justify-evenly '>
        <div className='flex py-3'>
          <h1 className='py-1 text-xl font-medium tracking-wide text-black/80'>
          Feels like 
            <span className='flex items-center justify-center pl-2 text-2xl text-center text-black '> 
              {data.main.feels_like.toFixed(0)}&#176;
            </span>
         </h1>
        </div>
        
          <div className='flex '>
           <h1 className='py-1 text-xl font-medium tracking-wide text-black/80'>
           Humidity 
           <span className='flex items-center justify-center pl-2 text-2xl text-center text-black '> 
              {data.main.humidity}%
            </span>
            </h1>
          </div>
       
          <div className='flex '>
            <h1 className='py-1 text-xl font-medium tracking-wide text-black/80'>
           Wind 
           <span className='flex items-center justify-center pl-2 text-2xl text-center text-black '> 
              {data.wind.speed.toFixed(0)} mph  
              </span>
            </h1>
          </div>     
        </div>
      </div>
    </div>
    </div>
 </div>


  );
};

export default Forecast;