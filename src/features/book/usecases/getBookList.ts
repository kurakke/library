import { BookEntity } from "~/features/book/entities";
import { ItemList } from "~/features/_type";
import { sleep } from "~/utils/sleep";

export const getBookList = async ({ size = 99, page = 1 }: { size?: number, page?: number } = {}): Promise<ItemList<BookEntity>> => {
    const url = new URL(process.env.NEXT_PUBLIC_BACKEND_URL + '/books/');
    const params = new URLSearchParams({ size: size.toString(), page: page.toString() });
    url.search = params.toString();

    const result = await fetch(url.href, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            mode: 'cors',
        },
    }).then<ItemList<BookEntity>>((res) => {
        return res.json();
    })
    return (
        {
            list: result.list,
            size: result.size,
            page: result.page,
            total: result.total,
            isReached: result.isReached,
        }
    )
}