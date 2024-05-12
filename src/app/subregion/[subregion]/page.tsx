import { CountryBySubRegion } from "@/components/CountryBySubRegion";

export default function Country({ params }: { params: { subregion: string } }) {
    const subRegionCode = params.subregion;
    return (
        <>
            <CountryBySubRegion params={subRegionCode} />
        </>
    )
}