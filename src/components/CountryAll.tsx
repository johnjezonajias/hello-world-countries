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

  return (
    <div className="max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">List of Countries</h1>
      <ul>
        {loading ? (
          <li className="p-4">Loading...</li>
        ) : (
          <>
            {Array.isArray(countries) && countries.length > 0 ? (
              sortedCountries.map(country => (
                <li key={country.cca3} className="mb-2">
                  <Link href={`/country/${country.cca3}`} className="hover:text-neutral-500">
                    {country.name.common} - {country.name.official}
                  </Link>
                </li>
              ))
            ) : (
              <li className="p-4">Error: Country data not available</li>
            )}
          </>
        )}
      </ul>
    </div>
  );
};