const baseUrl = 'https://restcountries.com/v3.1';

export const getAllCountries = () => baseUrl + '/all';

export const getCountriesByCode = (code: string) => baseUrl + `/alpha/${code}`;
