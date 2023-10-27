import { fetchCities } from 'api';
import { SearchBar } from './SearchBar/SearchBar';
import { CityCard } from './CityCard/CityCard';
import { useState, useEffect } from 'react';

export const App = () => {
  const [city, setCity] = useState('');
  const [data, setData] = useState(false);
  const [cityData, setCityData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [isLoadMore, setIsLoadMore] = useState(false);

  const getCity = value => {
    setCity(value);
    console.log(value);
  };

  // setData(false);

  useEffect(() => {
    setError(false);
    setIsLoadMore(false);
    if (city === '') {
      return;
    }
    setLoading(true);
    fetchCities(city)
      .then(value => {
        // getCityData(value);
        const [data] = value;
        // const { name, country, population, latitude, longitude } = data;

        setCityData(data);
        setData(true);
      })
      .catch(() => {
        setError(true);
      })

      .finally(() => {
        setLoading(false);
      });
  }, [city]);

  // const getCityData = value => {
  //   const [data] = value;
  //   setData(true);
  //   console.log(data);
  //   return data;
  // };

  return (
    <>
      <SearchBar getCity={getCity} />
      {data && <CityCard cityData={cityData} />}
    </>
  );
};
