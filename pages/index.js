import Head from 'next/head'
import Image from 'next/image'
import axios from 'axios';
import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import Post from '../components/Post'
import { FiSun, FiMoon } from 'react-icons/fi';
import { FaRegSun } from 'react-icons/fa';
import { BsCloudSun } from 'react-icons/bs';
import Spin from '../components/Spin.jsx';
import Forecast from '../components/Forecast'

export default function Home() {


  
  const LIGHT_THEME = 'light'
  const DARK_THEME = 'dark'
  


  const [theme, setTheme] = useState(LIGHT_THEME)
  const switchTheme = () => {
    if (!document.documentElement.classList.contains(DARK_THEME)) {
      document.documentElement.classList.add(DARK_THEME)
      setTheme(DARK_THEME)
    } else {
      document.documentElement.classList.remove(DARK_THEME)
      setTheme(LIGHT_THEME)
    }
  }

  const [city, setCity] = useState('');
  const [forecast, setForecast] = useState({});
  const [loading, setLoading] = useState(false);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${process.env.NEXT_PUBLIC_FORECAST_KEY}`;
  const fetchWeather = (e) => {
    e.preventDefault();
    setLoading(true);
    axios.get(url).then((response) => {
      setForecast(response.data);
      // console.log(response.data);
    });
    setCity('');
    setLoading(false);
  };

  if (loading) {
    return <Spin />;
  } else {
    return (
    <div>
      <Head>
        <title>Weather Forecast App</title>
      
      </Head>
      <div className='absolute  top-0 left-0 right-0 bottom-0  backdrop-brightness-50 bg-black/30 ' />
     <div className='bg-nature-light dark:bg-nature-dark w-full h-screen object-cover bg-cover bg-center  ' >
    
     <button
          onClick={switchTheme}
          className="absolute top-5 right-9 h-13 w-13  bg-size-60  bg-white-100  dark:text-yellow rounded-full capitalize">
          
          <BsCloudSun className='text-skyblue dark:text-yellow dark:border-color-skyblue bg-white rounded-lg border-2 text-5xl' />
      </button>

      {/* Search */}
      <div className='flex absolute ml-2 h-25  rounded-2xl p-8   mt-4 text-left '><div className='pb-2 mb-1 ml-2 '  ><Image  src="/30.png" alt="sun logo" height="60" width="60" /> </div><h1 className=' ml-1 mt-2 tracking-widest  text-4xl text-litewite drop-shadow-2xl font-thin '>Jacks Forecast</h1></div>    
        <div className='relative flex justify-between items-center max-w-[500px]  w-full m-auto pt-4 px-4 text-black z-10'>
      </div>
 
      <ul className="  pr-10  text-litewite space-y-3 text-center w-1/2 m-auto absolute top-40 left-80 ml-14 pl-24 mt-30  justify-between text-lg font-extralight  ">
      
      <li className='  shadow-md shadow-black tracking-wide backdrop-blur-xl bg-skyblue/10 backdrop-brightness-50     pr-10   pt-2 pb-2 pl-6 ml-8 '> Access current weather data for any location including over 200,000 cities </li>
  
      <li className='    pr-10 shadow-md tracking-wide shadow-black  bg-skyblue/10    backdrop-brightness-50 backdrop-blur-xl  pl-6 p-2 pt-3 ml-8 '>We collect and process weather data from different sources such as global and local weather models, satellites, radars and a vast network of weather stations</li>
      
       <form 
        onSubmit={fetchWeather}
        className='flex  ml-4  drop-shadow-lg justify-between items-center w-full m-auto mt-8 backdrop-blur-md shadow-black3 p-3 bg-gradient-to-r from-sarah/20 to-blue-500/20  border  border-maybe font-extralight tracking-wider text-white rounded-2xl'>
       <input 
       onChange={(e) => setCity(e.target.value)}
       className='bg-transparent tracking-wide border-none placeholder:text-litewite text-white focus:outline-none text-2xl ' 
       type="text" placeholder='Search city'  />
          <button  onClick={fetchWeather}>
            <BsSearch/>
          </button>
        </form>
      
   
    {forecast.main && <Forecast data={forecast} />}
    </ul>
    </div>
    
    </div>
  

  );
};
};