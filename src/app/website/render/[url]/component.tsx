"use client";
import { useRef } from "react";
import SplitScreen from "@/components/splitScreen/splitScreen";

export default function RenderPageComp({ decodedUrl }: { decodedUrl: string }) {
    const proxyUrl = `http://localhost:5001/proxy-iframe?url=${encodeURIComponent(decodedUrl)}`;

    return (
        <div className="w-full h-screen">
            <SplitScreen
                children={[
                    <div key={"render-page-left"}>
                        <h1>Render Page</h1>
                    </div>,
                    <iframe
                        role="article"
                        allow="fullscreen; clipboard-write"
                        loading="eager"
                        referrerPolicy="no-referrer"
                        key={"render-page-right"}
                        src={proxyUrl}
                        className="w-full h-full border-none"
                        sandbox="allow-scripts allow-same-origin allow-popups allow-forms allow-modals allow-top-navigation"
                    />,
                ]}
            />
        </div>
    );
}
