export interface Show {
    id?: number;
    title?: string | null;
    category?: string | null;
    rating?: string | null;
    year?: number;
    isBookmarked: boolean;
    isTrending?: boolean;
    thumbnail?: Thumbnail | null;
}

export interface Thumbnail {
    id?: number;
    regular?: ThumbnailSizingData | null;
}

export interface ThumbnailSizingData {
    id?: number;
    small?: string | null;
    medium?: string | null;
    large?: string | null;
}