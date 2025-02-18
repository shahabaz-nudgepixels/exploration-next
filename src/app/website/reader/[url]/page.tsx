import React from "react";
import Turndown from 'turndown';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/cjs/styles/prism';

async function fetchAndConvertContent(url: string) {
    try {
        const response = await fetch(`http://localhost:3000/api/fetch-content?url=${encodeURIComponent(url)}`);
        const { content } = await response.json();
        const turndownService = new Turndown({
            headingStyle: 'atx',
            // codeBlockStyle: 'fenced'
        });
        return turndownService.turndown(content);
    } catch (error) {
        console.error('Error fetching or converting content:', error);
        return null;
    }
}

export default async function WebsitePage({
    params,
}: {
    params: { url: string };
}) {
    const { url } = await params;
    let markdown = null;

    if (!url) {
        return (
            <div className="container mx-auto p-4">
                <p>No URL provided</p>
            </div>
        );
    }

    try {
        const updatedUrl = decodeURIComponent(url);
        markdown = await fetchAndConvertContent(updatedUrl);
    } catch (error) {
        console.error('Error fetching or converting content:', error);
    }

    if (!markdown) {
        return (
            <div className="container mx-auto p-4">
                <p>Error loading content</p>
            </div>
        );
    }

   
    return (
        <div className="flex justify-center">
            <div className="container mx-auto p-4">
                <h1 className="text-2xl font-bold mb-4">Website Content</h1>
                <div className="prose prose-slate max-w-none">
                    <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        rehypePlugins={[rehypeRaw, rehypeSanitize]}
                        components={{
                            code: function Code({ className, children, ...props }) {
                                const match = /language-(\w+)/.exec(className || '');
                                const isInline = !match;
                                return !isInline ? (
                                    <SyntaxHighlighter
                                        // @ts-ignore
                                        style={tomorrow}
                                        language={match![1]}
                                        PreTag="div"
                                        {...props}
                                    >
                                        {String(children).replace(/\n$/, '')}
                                    </SyntaxHighlighter>
                                ) : (
                                    <code className={className} {...props}>
                                        {children}
                                    </code>
                                );
                            }
                        }}
                    >
                        {markdown}
                    </ReactMarkdown>
                </div>
            </div>
        </div>
    );
}