import { getStyle } from '@/app/page';
import { IBlogsEntity, BLOG_TYPES, BLOG_STATUS, BLOG_BLOCK_TYPES } from '@/types/blog';

export const sampleBlog: IBlogsEntity = {
  _id: '1',
  blog_type: BLOG_TYPES.YOUTUBE_VIDEO_AI_GENERATED_BLOG,
  title: 'UX Mapping Methods: Visual-Design Guide',
  status: BLOG_STATUS.ACTIVE,
  source: null,
  source_url: null,
  metadescription: 'A comprehensive guide to UX mapping methods and visual design principles',
  slug: 'ux-mapping-methods-visual-design-guide',
  content_blocks: [
    {
      block_type: BLOG_BLOCK_TYPES.IMAGES,
      blocks: [],
      style: {
        width: '100%',
        height: 'auto',
        margin: '50px 0',
        padding: null,
        alignment: 'center',
        border: null,
        border_radius: '12px',
        background: null,
        color: null,
        bold: false,
        italic: false,
        underline: false,
        font_size: null,
        font_family: null,
        text_decoration: null,
        text_transform: null,
        text_align: null
      },
      src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/869e3792397eb5d7b41f4a4f829ada840778d4ba0157ff505ec7a47d7e032fe2',
      text: null,
      html: null,
      markdown: null
    },
    {
      block_type: BLOG_BLOCK_TYPES.HEADING_1,
      blocks: [],
      style: {
        bold: true,
        italic: false,
        underline: false,
        color: 'rgb(21, 21, 21)',
        background: null,
        width: null,
        height: null,
        alignment: null,
        font_size: '48px',
        font_family: null,
        border: null,
        border_radius: null,
        padding: null,
        margin: '48px 0 24px',
        text_decoration: null,
        text_transform: null,
        text_align: null
      },
      src: null,
      text: 'UX Mapping Methods: Visual-Design Guide',
      html: null,
      markdown: null
    },
    {
      block_type: BLOG_BLOCK_TYPES.PARAGRAPH,
      blocks: [],
      style: {
        bold: false,
        italic: false,
        underline: false,
        color: 'rgb(85, 82, 82)',
        background: null,
        width: null,
        height: null,
        alignment: null,
        font_size: '22px',
        font_family: null,
        border: null,
        border_radius: null,
        padding: null,
        margin: '24px 0',
        text_decoration: null,
        text_transform: null,
        text_align: null
      },
      src: null,
      text: 'UX visualizations (commonly referred to as UX mapping methods) are artifacts that describe various aspects of a product or processes associated with it. There are many different types of UX mappings: empathy maps, customer-journey maps, service blueprints, and roadmaps, to name a few.',
      html: null,
      markdown: null
    },
    {
        block_type: BLOG_BLOCK_TYPES.PARAGRAPH,
        blocks: [],
        style: getStyle({
            color: 'rgb(85, 82, 82)',
            font_size: '22px',
            margin: '24px 0'
        }),
        src: null,
        html: null,
        markdown: null,
        text: "Each map has a unique purpose and, thus, varies in structure and content. Though many of these maps begin in rough formats (for example, as a set of sticky notes or a collaborative spreadsheet), they are often transitioned to a polished form in order to be shared with others. This article outlines some visual-design tips for improving the appearance of your UX maps."
    }
  ],
  user: null,
  keywords: ['UX', 'Design', 'Mapping', 'Visual Design', 'User Experience'],
  statistics: {
    views: 1200,
    likes: 45,
    comments: 12,
    shares: 8
  },
  createdAt: new Date('2024-01-15'),
  updatedAt: new Date('2024-01-15')
};