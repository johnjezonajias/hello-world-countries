'use client'

import { getCountriesByCode } from '@/api/restCountriesRoutes';
import { useFetchApi } from '@/hooks/useFetchHook';
import Image from 'next/image';

type CountrySingleType = {
    params: string
}

export default function CountrySingle({ params }: CountrySingleType) {
  const countryByCode = getCountriesByCode(params);
  const { data: countries, loading } = useFetchApi({ url: countryByCode });

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          {Array.isArray(countries) && countries.length > 0 ? (
            <>
              <h1 className="text-3xl font-bold mb-4">{countries[0].name.common}</h1>
              <p>{countries[0].name.official}</p>
              <Image
                src={countries[0].flags.svg}
                alt={`${countries[0].name.common} flag`}
                width={100} // Set your desired width
                height={100} // Set your desired height
              />
            </>
          ) : (
            <div>Error: Country data not available</div>
          )}
        </>
      )}
    </div>
  );
};
