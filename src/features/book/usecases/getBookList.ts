import {BookEntity} from "~/features/book/entities";
import {ItemList} from "~/features/_type";

export const getBookList = (): ItemList<BookEntity> => {
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
    return (
        {
            list,
            size: 10,
            page: 1,
            total: 3,
        }
    )
}