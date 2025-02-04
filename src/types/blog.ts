export type ObjectValues<T> = T[keyof T]

export const BLOG_TYPES = {
    YOUTUBE_VIDEO_AI_GENERATED_BLOG: 1,
} as const

export const BLOG_STATUS = {
    ACTIVE: 1,
    INACTIVE: 2,
    DELETED: 3
} as const

export const BLOG_BLOCK_TYPES = {
    HEADING_1: 1,
    HEADING_2: 2,
    HEADING_3: 3,
    HEADING_4: 4,
    HEADING_5: 5,
    PARAGRAPH: 6,
    IMAGES: 7,
    VIDEOS: 8,
    AUDIOS: 9,
    CODES: 10,
    QUOTES: 11,
    LISTS: 12,
    LINKS: 13,
    TABLES: 14,
    EMBEDS: 15,
    FILES: 16,
} as const

export type BlogType = ObjectValues<typeof BLOG_TYPES>
export type BlogStatus = ObjectValues<typeof BLOG_STATUS>
export type BlogBlockType = ObjectValues<typeof BLOG_BLOCK_TYPES>

export interface IBlogsEntity {
    _id?: string
    blog_type: BlogType
    title: string;
    status: BlogStatus
    source: string | null
    source_url: string | null
    metadescription: string
    slug: string
    content_blocks: {
        block_type: BlogBlockType
        blocks: {}[]
        style: {
            bold: boolean
            italic: boolean
            underline: boolean
            color: string | null
            background: string | null
            width: string | null
            height: string | null
            alignment: string | null
            font_size: string | null
            font_family: string | null
            border: string | null
            border_radius: string | null
            padding: string | null
            margin: string | null
            text_decoration: string | null
            text_transform: string | null
            text_align: string | null
        }
        src: string | null
        text: string | null
        html: string | null
        markdown: string | null
    }[]
    user: string | null
    keywords: string[]
    statistics: {
        views: number;
        likes: number;
        comments: number;
        shares: number;
    }
    createdAt?: Date
    updatedAt?: Date
}