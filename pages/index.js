import Head from 'next/head'
import axios from 'axios';
import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import Spin from '../components/Spin.jsx';
import Forecast from '../components/Forecast'

export default function Home() {


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
    <div >
      <Head>
        <title>Weather Forecast App</title>
      </Head>
      <section className='flex items-center justify-center mt-10'>
        <div className="mx-auto  max-w-md px-2.5 text-center sm:max-w-lg sm:px-0">
          <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.15] text-black sm:text-6xl sm:leading-[1.15]">
            Weather Data
          <br />
            <span className="text-transparent bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text">
            FOR YOU
            </span>
          </h1>
          <h2 className="mt-5 text-gray-600 sm:text-xl">
          Access current weather data for any location including over 200,000 cities
          </h2>
      <div className="flex mx-auto space-x-4 max-w-fit">
      <form 
        onSubmit={fetchWeather}
        className='flex items-center justify-between w-full p-3 m-auto mt-8 ml-4 text-white border rounded-md bg-zinc-900'>
       <input 
       onChange={(e) => setCity(e.target.value)}
       className='text-xl font-light bg-transparent border-none placeholder:text-white focus:outline-none ' 
       type="text" placeholder='Search city'  />
          <button  onClick={fetchWeather}>
            <BsSearch/>
          </button>
        </form> 
      </div>
      <div className='flex flex-col items-center justify-center mt-6'>
        {forecast.main && <Forecast data={forecast} />}
      </div>
    </div>
  </section>
 </div>
  );
};
};