'use client'

import React from 'react';
import Link from 'next/link';
import { useFetchApi } from '@/hooks/useFetchHook';
import { getCountriesBySubRegion } from '@/api/restCountriesRoutes';

type CountryBySubRegionType = {
  params: string
}

export const CountryBySubRegion = ({ params }: CountryBySubRegionType) => {
  const subRegionCountries = getCountriesBySubRegion(params);
  const { data: countries, loading } = useFetchApi({ url: subRegionCountries });


  // sort countries by their common name.
  const sortedCountries = React.useMemo(() => {
    if (!countries) return [];
    return [...countries].sort((a, b) => {
      return a.name.common.localeCompare(b.name.common);
    });
  }, [countries]);

  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Discover Countries in {decodeURIComponent(params)}</h1>
      <ul>
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