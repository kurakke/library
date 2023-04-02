import {Header} from "~/ui/components/Header";
import {SearchInput} from "~/ui/components/SearchInput";
import {DefaultLayout} from "~/ui/layouts/Default";
import {Book} from "~/ui/components/Book";
import {getBookList} from "~/features/book/usecases/getBookList";

export const BooksPage = () => {
    const bookList = getBookList();
    return (
        <div>
            <DefaultLayout>
                <div className="px-16 mt-16">
                    <SearchInput/>
                    <div className="mt-16">
                        {
                            bookList.list.map((book) =>
                                <li key={book.id}><Book book={book}/></li>
                            )
                        }
                    </div>
                </div>
            </DefaultLayout>
        </div>
    )
}