import {useState} from "react";
import {SearchInput} from "~/ui/components/SearchInput";
import {DefaultLayout} from "~/ui/layouts/Default";
import {Book} from "~/ui/components/Book";
import {PAGE_PATH} from "~/features/application/constants/page";
import {useRouter} from "next/router";
import {getServerSideProps} from "~/views/pages/Books/beforeRender";
import {InferGetServerSidePropsType} from "next";
import classNames from "classnames";


enum DisplayStatus {
    All,
    CanRent
}
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

    return (
        <div>
            <DefaultLayout>
                <div className="px-16 mt-16">
                    <SearchInput onSearch={handleSearch}/>
                    <div className="mt-16">
                        <div
                            className="lib-tab flex justify-around items-center w-full h-40 rounded-lg border-2 border-solid font-black"
                            data-status = {displayStatus}
                        >
                            <button
                                onClick={() => setDisplayStatus(DisplayStatus.All)}
                                className={classNames("z-10 transition-all duration-500",{"text-white": displayStatus === DisplayStatus.All})}
                            >
                                全て
                            </button>
                            <button onClick={() => setDisplayStatus(DisplayStatus.CanRent)}
                                    className={classNames("z-10 transition-all duration-500",{"text-white":displayStatus === DisplayStatus.CanRent})}
                            >
                                貸出可能
                            </button>
                        </div>
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