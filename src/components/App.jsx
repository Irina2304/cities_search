import { fetchCities } from 'api';
import { SearchBar } from './SearchBar/SearchBar';
import { CityCard } from './CityCard/CityCard';
import { FavoritList } from './FavoriteList/FavoriteList';
import { Loader } from './Loader/Loader';
import { ErrorMessage } from './ErrorMessage/ErrorMessage';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';

export const App = () => {
  const [city, setCity] = useState('');
  const [data, setData] = useState(false);
  const [cityData, setCityData] = useState({});
  const [cityList, setCityList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getCity = value => {
    setCity(value);
  };

  const onAddCity = newCity => {
    const checkCity = cityList.find(city => city.id === newCity.id);
    if (checkCity) {
      return Notiflix.Notify.warning(
        `${newCity.name} is already in Favorite List`
      );
    }

    setCityList(prevCityList => [...prevCityList, newCity]);
  };

  const onDelCity = dellName => {
    setCityList(prevCityList =>
      prevCityList.filter(item => item.name !== dellName)
    );
  };

  const onShowCity = cityShowId => {
    const findCity = cityList.find(city => city.id === cityShowId);
    setCityData(findCity);
  };

  useEffect(() => {
    setError(false);

    if (city === '') {
      return;
    }
    setLoading(true);
    fetchCities(city)
      .then(value => {
        if (value.length === 0) {
          noCityFound();
          return;
        }
        const [data] = value;
        data.id = nanoid();
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

  const noCityFound = () => {
    Notiflix.Notify.failure(
      'Sorry, there are no sities matching your search query. Please try again.'
    );
  };

  const cityInList = () => {
    Notiflix.Notify.warning('is already in Favorite List');
  };

  return (
    <>
      <SearchBar getCity={getCity} />
      {loading && <Loader />}
      {error && (
        <ErrorMessage title="Whoops! Error! Please reload this page!" />
      )}
      {data && <CityCard cityData={cityData} onAddCity={onAddCity} />}
      {cityList.length !== 0 && (
        <FavoritList
          cityList={cityList}
          onDelCity={onDelCity}
          onShowCity={onShowCity}
        />
      )}
    </>
  );
};
