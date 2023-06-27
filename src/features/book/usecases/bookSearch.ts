import { fetcher } from "~/utils/fetcher";

export type SearchBody = {
    size?: number;
    page?: number;
    serchWord?: string | string[];
    filter?: string;
};

export const bookSearch = async ({
    size,
    page,
    serchWord,
    filter,
}: SearchBody) => {
    const url = new URL(`${process.env.NEXT_PUBLIC_BACKEND_URL}/books/serch`);

    const res = await fetcher<SearchBody>(url.href, {
        method: "POST",
        body: {
            size: size,
            page: page,
            serchWord: serchWord,
            filter: filter,
        },
    });

    return res.json();
};
