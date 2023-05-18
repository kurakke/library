import {BookEntity} from "~/features/book/entities";
import {sleep} from "~/utils/sleep";

export const getBook = async (): Promise<BookEntity> => {
    await sleep(2000)
    return (
        {
            id: "aaa",
            title: "pya",
            info: "wa-i",
        }
    )
}