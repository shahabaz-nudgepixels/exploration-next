import RenderPageComp from "./component";
export default async function RenderPage({
    params,
}: {
    params: { url: string };
}) {
    const { url } = await params;
    const decodedUrl = decodeURIComponent(url);

    return (
        <div className="w-full h-screen">
           <RenderPageComp decodedUrl={decodedUrl} />
        </div>
    );
}
