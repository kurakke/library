import {Header} from "~/ui/components/Header";
import {SearchInput} from "~/ui/components/SearchInput";
import {DefaultLayout} from "~/ui/layouts/Default";
import {Book} from "~/ui/components/Book";
import {getBookList} from "~/features/book/usecases/getBookList";
import {PAGE_PATH} from "~/features/application/constants/page";
import {useRouter} from "next/router";

export const BooksPage = () => {
    const router = useRouter()
    const handleSearch = (result: string) => {
        router.push({
            pathname: PAGE_PATH.Books,
            query: {
                keyword: result
            }
        })
    }
    const bookList = getBookList();
    return (
        <div>
            <DefaultLayout>
                <div className="px-16 mt-16">
                    <SearchInput onSearch={handleSearch}/>
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