import { NextResponse } from 'next/server';

import { Readability } from '@mozilla/readability';
import jsdom from 'jsdom';

async function extractMainContent(url: string) {
    const response = await fetch(url);
    const html = await response.text();
    const dom = new jsdom.JSDOM(html, { url });
    const reader = new Readability(dom.window.document);
    const article = reader.parse();
    return article ? article.content : 'Failed to extract content';
}

// extractMainContent('https://medium.com/@shahabaz_76251/master-youtube-for-study-sessions-note-taking-summaries-and-ai-powered-learning-with-gistr-ccb0e0e55c9f').then(console.log).catch((error) => {
//     console.error('Error extracting main content:', error);
// });

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);

        const url = searchParams.get('url');
        const content = await extractMainContent(url||'');

        return NextResponse.json({ content });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch content' }, { status: 500 });
    }
} 