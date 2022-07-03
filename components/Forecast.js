import React from 'react';
import Image from 'next/image';

const Forecast = ({data}) => {
  return (
    <div>
        <div>
            <div className=' absolute flex ml-36 mt-20 bottom-10 ' >
            <Image
             src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt='/'
            width='120'
            height='120'
          />
          
          </div>
          </div>
          
            <h1 className=' text-6xl ml-4 mt-12 '>{data.weather[0].main}</h1>
      
        <h1 className='flex text-7xl pl-40 ml-40'>{data.main.temp.toFixed(0)}&#176;</h1>
     
      
      {/* Bottom */}


   
       <div className='flex ml-36 mt-8 space-x-4'>
        <h1 className='text-xl'>Feels like</h1>
            <h1 className='font-bold text-2xl'>{data.main.feels_like.toFixed(0)}&#176;</h1>
           
        <h1 className='text-xl'>Humidity</h1>
            <h1 className='font-bold text-2xl'>{data.main.humidity}%</h1>
           
        <h1 className='text-xl'>Winds</h1>
            <h1 className='font-bold text-2xl'>{data.wind.speed.toFixed(0)} MPH</h1>
        </div>
 </div>


  );
};

export default Forecast;