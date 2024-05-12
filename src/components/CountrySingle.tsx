'use client'

import { getCountriesByCode, getCountriesByName } from '@/api/restCountriesRoutes';
import { useFetchApi } from '@/hooks/useFetchHook';
import Image from 'next/image';
import Link from 'next/link';

type CountrySingleType = {
    params: string
}

export default function CountrySingle({ params }: CountrySingleType) {
    const countryByCode = getCountriesByCode(params);
    const countryByName = getCountriesByName(params);
    const { data: countriesByCode, loading: loadingByCode } = useFetchApi({ url: countryByCode });
    const { data: countriesByName, loading: loadingByName } = useFetchApi({ url: countryByName });

    const isLoading = loadingByCode || loadingByName;

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (countriesByName && countriesByName.length > 0) {
        const country = countriesByName[0];

        return (
            <>
                <div className="flex items-center gap-x-3 mb-4">
                    {country.flags && (
                        <Image
                            src={country.flags.svg}
                            alt={`${country.name?.common} flag`}
                            width={50}
                            height={50}
                        />
                    )}
                    <h1 className="text-4xl font-bold uppercase">{country.name?.common} {country.independent && <span className="text-xs font-normal"> (independent)</span>}</h1>
                </div>
                <h2 className="text-xl font-normal mb-2">{country.name?.official}</h2>
                <p><span className="text-sm text-neutral-500">Capital:</span> {country.capital ? country.capital : 'No capital city available'}</p>
                {country.altSpellings && (
                    <p>
                        <span className="text-sm text-neutral-500">Alias: </span> {country.altSpellings.join(', ')}
                    </p>
                )}
                <p><span className="text-sm text-neutral-500">Population:</span> {country.population?.toLocaleString()}</p>
                <p><span className="text-sm text-neutral-500">Currency: </span> 
                    {country.currencies ? (
                        Object.entries(country.currencies).map(([code, currency]: [string, any], index) => (
                            <span key={code}>
                                {currency.name} <span className="text-sm">[{code} - {currency.symbol}]</span>
                                {index < Object.entries(country.currencies).length - 1 && ', '}
                            </span>
                        ))
                    ) : (
                        <span>No currency information available</span>
                    )}
                </p>
                {country.area && 
                    <p>
                        <span className="text-sm text-neutral-500">Land Area:</span> {country.area.toLocaleString()} sq km
                    </p>
                }
                <p><span className="text-sm text-neutral-500">Location:</span>  {country.latlng ? `${country.latlng[0]}° N, ${country.latlng[1]}° E` : 'N/A'}</p>
                {country.languages && 
                    <p>
                        <span className="text-sm text-neutral-500">Language:</span> {Object.entries(country.languages).map(([code, language]: [string, any], index) => (
                            <span key={code}>
                                <Link href={`/lang/${language}`} passHref className="text-neutral-400 hover:text-white">
                                    {language}
                                </Link>
                                {index < Object.keys(country.languages).length - 1 && ', '}
                            </span>
                        ))}
                    </p>
                }
                {country.timezones && 
                    <p>
                        <span className="text-sm text-neutral-500">Timezone:</span> {country.timezones.join(', ')}
                    </p>
                }
                {country.idd && (
                    <p>
                        <span className="text-sm text-neutral-500">IDD:</span> {country.idd.root}{country.idd.suffixes.join(', ')}
                    </p>
                )}
                <p className="mt-2 mb-3">
                    <span className="text-sm text-neutral-500">Country Codes:</span>
                    <table>
                        <tbody>
                            <tr>
                                <td className="text-right text-sm text-neutral-500 pl-4">cca2:</td>
                                <td>{country.cca2}</td>
                            </tr>
                            <tr>
                                <td className="text-right text-sm text-neutral-500 pl-4">ccn3:</td>
                                <td>{country.ccn3}</td>
                            </tr>
                            <tr>
                                <td className="text-right text-sm text-neutral-500 pl-4">cca3:</td>
                                <td>{country.cca3}</td>
                            </tr>
                            <tr>
                                <td className="text-right text-sm text-neutral-500 pl-4">cioc:</td>
                                <td>{country.cioc}</td>
                            </tr>
                        </tbody>
                    </table>
                </p>
                <p><span className="text-sm text-neutral-500">United Nation: </span> {country.unMember ? '- member -' : '(non-member)'}</p>
                <p><span className="text-sm text-neutral-500">Region:</span> <Link href={`/region/${country.region}`} passHref className="text-neutral-400 hover:text-white">{country.region}</Link></p>
                <p><span className="text-sm text-neutral-500">Subregion:</span> <Link href={`/subregion/${country.subregion}`} passHref className="text-neutral-400 hover:text-white">{country.subregion}</Link></p>
                {country.borders && (
                    <p>
                        <span className="text-sm text-neutral-500">Bordering Countries:</span> {country.borders.map((border: string, index: number) => (
                            <span key={border}>
                                <Link href={`/country/${border}`} passHref className="text-neutral-400 hover:text-white">
                                    {border}
                                </Link>
                                {index < country.borders.length - 1 && ', '}
                            </span>
                        ))}
                    </p>
                )}
                <p className="mt-2">
                    <span className="text-sm text-neutral-500">Top-Level Domain:</span>{" "}
                    {country.tld.join(", ")}
                </p>
                {country.maps && (
                    <p className="mt-2">
                        <span className="text-sm text-neutral-500">View in Maps:</span> <Link href={country.maps.googleMaps} target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white">
                            Google Maps
                        </Link>, <Link href={country.maps.openStreetMaps} target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white">
                            OpenStreetMaps
                        </Link>
                    </p>
                )}
                {country.flags && (
                    <section className="bg-neutral-800 flex items-center justify-center mt-10">
                        <div>
                            <Image
                                src={country.flags.svg}
                                alt={`${country.name?.common} flag`}
                                width={350}
                                height={350}
                            />
                        </div>
                        <figcaption className="text-sm text-neutral-500 py-4 px-10">{country.flags?.alt}</figcaption>
                        {country.coatOfArms && Object.keys(country.coatOfArms).length > 0 && (
                            <div className="py-2 px-6">
                                <Image
                                    src={country.coatOfArms.svg}
                                    alt={`${country.name?.common} coat of arms`}
                                    width={120}
                                    height={120}
                                />
                            </div>
                        )}
                    </section>
                )}
            </>
        );
    }

    if (countriesByCode && countriesByCode.length > 0) {
        const country = countriesByCode[0];

        return (
            <>
                <h1 className="text-5xl font-bold mb-4">{country.name?.common}</h1>
                <figcaption>
                    {country.flags && (
                        <Image
                            src={country.flags.svg}
                            alt={`${country.name?.common} flag`}
                            width={180}
                            height={180}
                        />
                    )}
                </figcaption>
                <h2 className="text-lg mt-6">{country.name?.official} - {(country.cca3) ? country.cca3 : country.cca2}</h2>
                <p><span className="text-sm text-neutral-500">Capital:</span> {country.capital ? country.capital : 'No capital city available'}</p>
                <p><span className="text-sm text-neutral-500">Region:</span> <Link href={`/region/${country.region}`} passHref className="text-neutral-400 hover:text-white">{country.region}</Link></p>
                <p><span className="text-sm text-neutral-500">Subregion:</span> <Link href={`/subregion/${country.subregion}`} passHref className="text-neutral-400 hover:text-white">{country.subregion}</Link></p>
                <p><span className="text-sm text-neutral-500">Population:</span> {country.population?.toLocaleString()}</p>
                <p><span className="text-sm text-neutral-500">Currency: </span> 
                    {country.currencies ? (
                        Object.entries(country.currencies).map(([code, currency]: [string, any], index) => (
                            <span key={code}>
                                {currency.name} <span className="text-sm">[{code} - {currency.symbol}]</span>
                                {index < Object.entries(country.currencies).length - 1 && ', '}
                            </span>
                        ))
                    ) : (
                        <span>No currency information available</span>
                    )}
                </p>
                {country.area && 
                    <p>
                        <span className="text-sm text-neutral-500">Land Area:</span> {country.area.toLocaleString()} sq km
                    </p>
                }
                <Link href={`/country/${encodeURIComponent(country.name?.common)}`} passHref className="text-xs text-neutral-400 mt-4 hover:text-white">
                    [see all details]
                </Link>
            </>
        );
    }

    return <div>Error: Country data not available</div>;
}
