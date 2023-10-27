import axios from 'axios';

export const fetchCities = async query => {
  axios.defaults.baseURL = 'https://api.api-ninjas.com/v1/city';
  axios.defaults.headers.common = {
    'X-Api-Key': 'ZTd2lBm7zVN3XUdmRNkRwHIbIb5Wqdrmm0OyQjHX',
  };

  const params = new URLSearchParams({
    name: query,
  });

  const response = await axios.get(`?${params}`);

  return response.data;
};
