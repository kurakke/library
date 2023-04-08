import {BookEntity} from "~/features/book/entities";
import {ItemList} from "~/features/_type";

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))
export const getBookList = async (): Promise<ItemList<BookEntity>> => {
    const list: BookEntity[] = [
        {
            id: "aaa",
            title: "pya",
            info: "wa-i",
        },
        {
            id: "bbb",
            title: "pyu",
            info: "wa-u",
        },
        {
            id: "ccc",
            title: "pyo",
            info: "wa-e",
        },
        {
            id: "ddd",
            title: "pyi",
            info: "wan",
        }
    ]
    await sleep(2000)
    return (
        {
            list,
            size: 10,
            page: 1,
            total: 3,
        }
    )
}