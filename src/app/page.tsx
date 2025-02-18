"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { BlogPost } from "@/components/blog/BlogPost";
import { BLOG_BLOCK_TYPES, BLOG_TYPES, IBlogsEntity } from "../types/blog";

export function getStyle(style: Partial<IBlogsEntity['content_blocks'][0]['style']>): IBlogsEntity['content_blocks'][0]['style'] {
  return {
    alignment: style.alignment || null,
    background: style.background || null,
    bold: style.bold || false,
    border: style.border || null,
    border_radius: style.border_radius || null,
    color: style.color || null,
    font_family: style.font_family || null,
    font_size: style.font_size || null,
    height: style.height || null,
    italic: style.italic || false,
    margin: style.margin || null,
    padding: style.padding || null,
    text_align: style.text_align || null,
    text_decoration: style.text_decoration || null,
    text_transform: style.text_transform || null,
    underline: style.underline || false,
    width: style.width || null,
  }
}

export default function Home() {
  const [url, setUrl] = useState("");
  const [mode, setMode] = useState<"reader" | "render">("reader");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (url) {
      const encodedUrl = encodeURIComponent(url);
      router.push(`/website/${mode}/${encodedUrl}`);
    }
  };

  const blog: IBlogsEntity = {
    blog_type: BLOG_TYPES.YOUTUBE_VIDEO_AI_GENERATED_BLOG,
    _id: "60f1b1b3b3b3b3b3b3b3b3b3",
    title: "AI Generated Blog",
    metadescription: "AI Generated Blog",
    keywords: ["AI", "Generated", "Blog"],
    status: 1,
    slug: "ai-generated-blog",
    source: "https://www.youtube.com/watch?v=6x3oP8d5v5o",
    source_url: "https://www.youtube.com/watch?v=6x3oP8d5v5o",
    user: "60f1b1b3b3b3b3b3b3b3b3b3",
    statistics: {
      comments: 0,
      views: 0,
      likes: 0,
      shares: 0,
    },
    content_blocks: [
      {
        block_type: BLOG_BLOCK_TYPES.HEADING_1,
        blocks: [],
        html: null,
        markdown: null,
        src: null,
        style: getStyle({}),
        text: "AI Generated Blog",
      }
    ],
    createdAt: new Date("2021-07-17T00:00:00.000Z"),
    updatedAt: new Date("2021-07-17T00:00:00.000Z"),
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <form onSubmit={handleSubmit} className="w-full max-w-lg">
        <div className="flex flex-col gap-4">
          <div className="flex justify-center gap-4 mb-4">
            <button
              type="button"
              onClick={() => setMode("reader")}
              className={`px-4 py-2 rounded-md ${
                mode === "reader"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              Reader Mode
            </button>
            <button
              type="button"
              onClick={() => setMode("render")}
              className={`px-4 py-2 rounded-md ${
                mode === "render"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              Render Mode
            </button>
          </div>
          <input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter webpage URL"
            className="p-2 border rounded-md"
            required
          />
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
          >
            {mode === "reader" ? "Open in Reader" : "Open in Render"}
          </button>
        </div>
      </form>
      <BlogPost />
    </div>
  );
}
