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
      <div className='absolute top-0 bottom-0 left-0 right-0 backdrop-brightness-50 bg-black/30 ' />
     <div className='object-cover w-full h-screen bg-center bg-cover bg-nature-light dark:bg-nature-dark ' >
    
     <button
          onClick={switchTheme}
          className="absolute capitalize rounded-full top-5 right-9 h-13 w-13 bg-size-60 bg-white-100 dark:text-yellow">
          
          <BsCloudSun className='text-5xl bg-white border-2 rounded-lg text-skyblue dark:text-yellow dark:border-color-skyblue' />
      </button>

      {/* Search */}
      <div className='absolute flex p-8 mt-4 ml-2 text-left h-25 rounded-2xl '><div className='pb-2 mb-1 ml-2 '  ><Image  src="/30.png" alt="sun logo" height="60" width="60" /> </div><h1 className='mt-2 ml-1 text-4xl font-thin tracking-widest  text-litewite drop-shadow-2xl'>Forecast</h1></div>    
        <div className='relative flex justify-between items-center max-w-[500px]  w-full m-auto pt-4 px-4 text-black z-10'>
      </div>
 
      <ul className="absolute justify-between w-1/2 pl-24 pr-10 m-auto space-y-3 text-lg text-center  text-litewite top-40 left-80 ml-14 mt-30 font-extralight">
      
      <li className='pt-2 pb-2 pl-6 pr-10 ml-8 tracking-wide shadow-md  shadow-black backdrop-blur-xl bg-skyblue/10 backdrop-brightness-50'> Access current weather data for any location including over 200,000 cities </li>
  
      <li className='p-2 pt-3 pl-6 pr-10 ml-8 tracking-wide shadow-md  shadow-black bg-skyblue/10 backdrop-brightness-50 backdrop-blur-xl'>We collect and process weather data from different sources such as global and local weather models, satellites, radars and a vast network of weather stations</li>
      
       <form 
        onSubmit={fetchWeather}
        className='flex items-center justify-between w-full p-3 m-auto mt-8 ml-4 tracking-wider text-white border drop-shadow-lg backdrop-blur-md shadow-black3 bg-gradient-to-r from-sarah/20 to-blue-500/20 border-maybe font-extralight rounded-2xl'>
       <input 
       onChange={(e) => setCity(e.target.value)}
       className='text-2xl tracking-wide text-white bg-transparent border-none placeholder:text-litewite focus:outline-none ' 
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