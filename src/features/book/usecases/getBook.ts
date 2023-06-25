import { useRouter } from "next/router";
import { BookEntity } from "~/features/book/entities";
import { fetcher } from "~/utils/fetcher";
import { sleep } from "~/utils/sleep";

export const getBook = async (
    bookId: string | string[]
): Promise<BookEntity | { url: string }> => {
    const url = new URL(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/books/${bookId}`
    );

    const res = await fetcher(url.href, {
        method: "GET",
    });

    const data = await res.json();

    await sleep(500);

    return data;
};
