import {useState} from "react";
import {SearchInput} from "~/ui/components/SearchInput";
import {DefaultLayout} from "~/ui/layouts/Default";
import {Book} from "~/ui/components/Book";
import {PAGE_PATH} from "~/features/application/constants/page";
import {useRouter} from "next/router";
import {getServerSideProps} from "~/views/pages/Books/beforeRender";
import {InferGetServerSidePropsType} from "next";
import {Tab, DisplayStatus} from "~/ui/components/Tab";
import {createDynamicUrl} from "~/features/application/utils/url";
import Link from "next/link";


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

    const [displayStatus, setDisplayStatus] = useState<DisplayStatus>(DisplayStatus.All);
    const handleChangeTab = (result: DisplayStatus) => {
        setDisplayStatus(result)
    }

    return (
        <div>
            <DefaultLayout>
                <div className="px-16 mt-16">
                    <SearchInput onSearch={handleSearch}/>
                    <div className="mt-16">
                        <Tab displayStatus={displayStatus} onChange={handleChangeTab}/>
                        {
                            bookList.list.map((book) =>
                                <Link href={createDynamicUrl(PAGE_PATH.BookOne, {
                                    bookId: book.id,
                                })}>
                                    <a>
                                        <li key={book.id}><Book book={book}/></li>
                                    </a>
                                </Link>
                            )
                        }
                    </div>
                </div>
            </DefaultLayout>
        </div>
    )
}