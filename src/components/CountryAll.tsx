'use client'

import React from 'react';
import Link from 'next/link';
import { useFetchApi } from '@/hooks/useFetchHook';
import { getAllCountries } from '@/api/restCountriesRoutes';

export const CountryAll = () => {
  const allCountries = getAllCountries();
  const { data: countries, loading } = useFetchApi({ url: allCountries });

  // sort countries by their common name.
  const sortedCountries = React.useMemo(() => {
    if (!countries) return [];
    return [...countries].sort((a, b) => {
      return a.name.common.localeCompare(b.name.common);
    });
  }, [countries]);

  // count the number of countries.
  const countryCount = sortedCountries.length;

  return (
    <>
      <h1 className="text-3xl font-bold mb-10">Hurray! We&apos;ve Found {countryCount} Amazing Countries on Our Beloved Planet!</h1>
      <ul className="columns-4 gap-x-10">
        {loading ? (
          <li className="p-4">Loading...</li>
        ) : (
          <>
            {Array.isArray(countries) && countries.length > 0 ? (
              sortedCountries.map(country => (
                <li key={country.cca3} className="mb-2">
                  <Link href={`/country/${country.cca3}`} className="text-md hover:text-neutral-500 font-light">
                    {country.name.common} <span className="text-xs text-neutral-400">({country.cca3})</span>
                  </Link>
                </li>
              ))
            ) : (
              <li className="p-4">Error: Country data not available</li>
            )}
          </>
        )}
      </ul>
    </>
  );
};