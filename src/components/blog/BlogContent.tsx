import { sampleBlog } from '@/data/sampleBlog';
import { BLOG_BLOCK_TYPES, IBlogsEntity } from '@/types/blog';
import React from 'react';

export const BlogContent = () => {
    const renderBlock = (block: IBlogsEntity['content_blocks'][0]) => {
        const style = {
            fontWeight: block.style.bold ? 'bold' : 'normal',
            fontStyle: block.style.italic ? 'italic' : 'normal',
            textDecoration: block.style.underline ? 'underline' : 'none',
            color: block.style.color || 'inherit',
            backgroundColor: block.style.background || 'transparent',
            width: block.style.width || 'auto',
            height: block.style.height || 'auto',
            textAlign: block.style.text_align as any || 'left',
            fontSize: block.style.font_size || 'inherit',
            fontFamily: block.style.font_family || 'inherit',
            border: block.style.border || 'none',
            borderRadius: block.style.border_radius || '0',
            padding: block.style.padding || '0',
            margin: block.style.margin || '0',
        };

        switch (block.block_type) {
            case BLOG_BLOCK_TYPES.HEADING_1:
                return <h1 style={style}>{block.text}</h1>;
            case BLOG_BLOCK_TYPES.HEADING_2:
                return <h2 style={style}>{block.text}</h2>;
            case BLOG_BLOCK_TYPES.PARAGRAPH:
                return <p style={style}>{block.text}</p>;
            case BLOG_BLOCK_TYPES.IMAGES:
                const imageSrc = block.src || '';
                const imageTag = `<img src="${imageSrc}"/>`;
                return <div style={style} dangerouslySetInnerHTML={{ __html: imageTag }} />
            default:
                return null;
        }
    };
    return (
        <article className="flex flex-col items-stretch mt-20 max-md:max-w-full max-md:mt-10">
            {sampleBlog.content_blocks.map((block, index) => (
                <React.Fragment key={index}>
                    {renderBlock(block)}
                </React.Fragment>
            ))}
        </article>
        // <article className="flex flex-col items-stretch mt-20 max-md:max-w-full max-md:mt-10">
        //     <img
        //         loading="lazy"
        //         srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/869e3792397eb5d7b41f4a4f829ada840778d4ba0157ff505ec7a47d7e032fe2?placeholderIfAbsent=true&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/869e3792397eb5d7b41f4a4f829ada840778d4ba0157ff505ec7a47d7e032fe2?placeholderIfAbsent=true&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/869e3792397eb5d7b41f4a4f829ada840778d4ba0157ff505ec7a47d7e032fe2?placeholderIfAbsent=true&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/869e3792397eb5d7b41f4a4f829ada840778d4ba0157ff505ec7a47d7e032fe2?placeholderIfAbsent=true&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/869e3792397eb5d7b41f4a4f829ada840778d4ba0157ff505ec7a47d7e032fe2?placeholderIfAbsent=true&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/869e3792397eb5d7b41f4a4f829ada840778d4ba0157ff505ec7a47d7e032fe2?placeholderIfAbsent=true&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/869e3792397eb5d7b41f4a4f829ada840778d4ba0157ff505ec7a47d7e032fe2?placeholderIfAbsent=true&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/869e3792397eb5d7b41f4a4f829ada840778d4ba0157ff505ec7a47d7e032fe2?placeholderIfAbsent=true"
        //         className="aspect-[3.11] object-contain w-full mt-[50px] rounded-xl max-md:max-w-full max-md:mt-10"
        //     />

        //     <h1 className="text-[rgba(21,21,21,1)] text-5xl font-bold tracking-[1px] mt-12 max-md:max-w-full max-md:text-[40px] max-md:mt-10">
        //         UX Mapping Methods: Visual-Design Guide
        //     </h1>

        //     <div className="text-[rgba(85,82,82,1)] text-[22px] font-normal leading-10 tracking-[1px] mt-6 max-md:max-w-full">
        //         <p>
        //             UX visualizations (commonly referred to as <strong>UX mapping methods</strong>) are artifacts that describe various aspects of a product or processes associated with it. There are many different types of UX mappings: <strong>empathy maps</strong>, <strong>customer-journey maps</strong>, <strong>service blueprints</strong>, and <strong>roadmaps</strong>, to name a few.
        //         </p>
        //         <br />
        //         <p>
        //             Each map has a unique purpose and, thus, varies in structure and content. Though many of these maps begin in rough formats (for example, as a set of sticky notes or a collaborative spreadsheet), they are often transitioned to a polished form in order to be shared with others. This article outlines some visual-design tips for improving the appearance of your UX maps.
        //         </p>
        //     </div>

        //     <h2 className="text-black text-[28px] font-medium leading-[50px] tracking-[1px] mt-[30px] max-md:max-w-full">
        //         When the Visual Design of a Map Matters
        //     </h2>

        //     <p className="text-[rgba(85,82,82,1)] text-[22px] font-normal leading-10 tracking-[1px] mt-4 max-md:max-w-full">
        //         There are times when it doesn't make sense to take time to polish a map. For example, imagine you are working with crossdisciplinary peers and realize, as you are prioritizing work, that you all have different ideas about what your users do. A solution may be to create a customer-journey map to bring everyone on the same page. In this case, the collaboration and discussion are more important than the map and investing time in the map's visual design is not necessary.
        //     </p>
        // </article>
    );
};