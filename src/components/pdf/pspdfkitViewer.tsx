"use client";
import { useEffect, useRef } from "react";
import PSPDFKit from "pspdfkit";

export default function PdfViewerComponent(props: { document: string }) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const container = containerRef.current; // This `useRef` instance will render the PDF.

        (async function () {
            PSPDFKit.unload(container) // Ensure that there's only one PSPDFKit instance.

            const instance = await PSPDFKit.load({
                // Container where PSPDFKit should be mounted.
                container,
                // The document to open.
                document: props.document,
                // Use the public directory URL as a base URL. PSPDFKit will download its library assets from here.
                baseUrl: `${window.location.protocol}//${window.location.host}/`,
            });
        })();

        return () => {
            PSPDFKit && PSPDFKit.unload(container)
        }
    }, []);

    // This div element will render the document to the DOM.
    return <div ref={containerRef} style={{ width: "100%", height: "100vh" }} />
}