import React from 'react';
import Image from 'next/image';

const Forecast = ({data}) => {
  return (
    <div>
        <div>
            <div className='absolute flex mt-20 ml-36 bottom-10' >
            <Image
             src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt='/'
            width='120'
            height='120'
          />
          
          </div>
          </div>
          <h1 className='flex pt-4 mt-2 ml-6 text-5xl font-semibold text-again/80'>{data.name}</h1>
            <h1 className='mt-2 ml-4 text-6xl '>{data.weather[0].main}</h1>
      
        <h1 className='flex pl-40 ml-40 text-7xl'>{data.main.temp.toFixed(0)}&#176;</h1>
     
      
      {/* Bottom */}


      
       <div className='flex mt-6 space-x-4 ml-36'>
        <h1 className='text-xl'>Feels like</h1>
            <h1 className='text-2xl font-bold'>{data.main.feels_like.toFixed(0)}&#176;</h1>
           
        <h1 className='text-xl'>Humidity</h1>
            <h1 className='text-2xl font-bold'>{data.main.humidity}%</h1>
           
        <h1 className='text-xl'>Winds</h1>
            <h1 className='text-2xl font-bold'>{data.wind.speed.toFixed(0)} MPH</h1>
        </div>
 </div>


  );
};

export default Forecast;