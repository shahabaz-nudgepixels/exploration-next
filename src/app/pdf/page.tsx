"use client";
import NoteEditor from "@/components/editor/notEditor";
import PdfViewerComponent from "@/components/pdf/pspdfkitViewer";
import ReactPdfHighligher from "@/components/pdf/reactPdfHighligher";
import SplitScreen from "@/components/splitScreen/splitScreen";
import React from "react";


export default function PDFPage() {
    return (
        <React.Fragment>
            <SplitScreen
                key={'1-split-screen'}
                children={[
                    <NoteEditor key={'1-editor'} />,
                    <ReactPdfHighligher key={'2-highliter'}  />
                ]}
                splitRatios={[1, 2]}
            />
        </React.Fragment>
    )
}