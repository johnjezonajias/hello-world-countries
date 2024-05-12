const baseUrl = 'https://restcountries.com/v3.1';

export const getAllCountries = () => baseUrl + '/all';

export const getCountriesByName = (name: string) => baseUrl + `/name/${name}?fullText=true`;

export const getCountriesByCode = (code: string) => baseUrl + `/alpha/${code}`;

export const getCountriesByRegion = (region: string) => baseUrl + `/region/${region}`;

export const getCountriesBySubRegion = (subregion: string) => baseUrl + `/subregion/${subregion}`;

export const getCountriesByLanguage = (language: string) => baseUrl + `/lang/${language}`;
