import { CountryByRegion } from "@/components/CountryByRegion";

export default function Country({ params }: { params: { region: string } }) {
    const regionCode = params.region;
    return (
        <>
            <CountryByRegion params={regionCode} />
        </>
    )
}