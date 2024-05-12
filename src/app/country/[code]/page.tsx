import CountrySingle from "@/components/CountrySingle";

export default function Country({ params }: { params: { code: string } }) {
    const countryCode = params.code;
    return (
        <>
            <CountrySingle params={countryCode} />
        </>
    )
}