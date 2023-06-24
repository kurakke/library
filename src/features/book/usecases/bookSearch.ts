import { fetcher } from "~/utils/fetcher";

export type SearchBody = {
    size?: number;
    page?: number;
    serchWord: string;
};

export const bookSearch = async ({ size, page, serchWord }: SearchBody) => {
    const url = new URL(`${process.env.NEXT_PUBLIC_BACKEND_URL}/books/serch`);

    const res = await fetcher(url.href, {
        method: "POST",
        body: JSON.stringify({
            size: size,
            page: page,
            serchWord: serchWord,
        }),
    });

    return res.json();
};
