'use client';
import React from "react";
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
// import GlobalDragHandle from "tiptap-extension-global-drag-handle";
import * as pmView from "@tiptap/pm/view";
// await import("@tiptap/pm/view");

function getPmView() {
    try {
        // @ts-ignore
        return pmView;
    } catch (error) {
        return null;
    }
}

export default function NoteEditor() {
    (() => {
        // @ts-ignore
        console.log('pmView', getPmView()['__serializeForClipboard']);

        try {
            // @ts-ignore
            const fallback = getPmView()["__serializeForClipboard"];
            if (typeof fallback === "function") {
                console.log('pmView.__serializeForClipboard is a function');
            }
            else {
                console.log('pmView.__serializeForClipboard is not a function');
            }
        } catch (error) {

        }

    })()

    const editor = useEditor({
        extensions: [
            StarterKit,
            // GlobalDragHandle
        ],
        content: '<p>Hello World! 🌎️</p>',
    })
    return (
        <React.Fragment>
            <h1>Note Editor</h1>
            <EditorContent editor={editor} />
        </React.Fragment>
    )
}