'use client'

import { getCountriesByCode } from '@/api/restCountriesRoutes';
import { useFetchApi } from '@/hooks/useFetchHook';

export default function CountryPage({ params }: { params: { code: string } }) {
  const countryCode = params.code;
  const countryByCode = getCountriesByCode(countryCode);
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
            </>
          ) : (
            <div>Error: Country data not available</div>
          )}
        </>
      )}
    </div>
  );
};
