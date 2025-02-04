'use client';
import React from "react";
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

export default function NoteEditor() {
    const editor = useEditor({
        extensions: [StarterKit],
        content: '<p>Hello World! 🌎️</p>',
    })
    return (
        <React.Fragment>
            <h1>Note Editor</h1>
            <EditorContent editor={editor} />
        </React.Fragment>
    )
}