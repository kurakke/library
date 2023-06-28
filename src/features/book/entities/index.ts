export type BookEntity = {
    id: string;
    isbn: string;
    title: string;
    publicationYear: number;
    owner: string;
    thumbnailUrl?: string;
};
