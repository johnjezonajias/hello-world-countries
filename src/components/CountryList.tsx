'use client'

import Link from 'next/link';
import { useFetchApi } from '@/hooks/useFetchHook';
import { getAllCountries } from '@/api/restCountriesRoutes';

export const CountryList = () => {
  const allCountries = getAllCountries();
  const { data: countries, loading } = useFetchApi({ url: allCountries });

  return (
    <div className="max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">List of Countries</h1>
      <ul>
        {loading ? (
          <li className="p-4">Loading...</li>
        ) : (
          <>
            {Array.isArray(countries) && countries.length > 0 ? (
              countries.map(country => (
                <li key={country.cca3} className="mb-2">
                  <Link href={`/country/${country.cca3}`} className="hover:text-neutral-500">
                    {country.name.common}
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