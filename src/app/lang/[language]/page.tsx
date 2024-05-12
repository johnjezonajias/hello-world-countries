import { CountriesByLanguage } from "@/components/CountryByLanguage";

export default function Country({ params }: { params: { language: string } }) {
    const languageCode = params.language;
    return (
        <>
            <CountriesByLanguage params={languageCode} />
        </>
    )
}