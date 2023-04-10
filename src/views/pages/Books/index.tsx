import {Header} from "~/ui/components/Header";
import {SearchInput} from "~/ui/components/SearchInput";
import {DefaultLayout} from "~/ui/layouts/Default";
import {Book} from "~/ui/components/Book";
import {PAGE_PATH} from "~/features/application/constants/page";
import {useRouter} from "next/router";
import {getServerSideProps} from "~/views/pages/Books/beforeRender";
import {InferGetServerSidePropsType} from "next";

export const BooksPage = (
    {bookList}: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
    const router = useRouter()
    const handleSearch = (result: string) => {
        router.push({
            pathname: PAGE_PATH.Books,
            query: {
                keyword: result
            }
        })
    }
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