import {useState} from "react";
import {SearchInput} from "~/ui/components/SearchInput";
import {DefaultLayout} from "~/ui/layouts/Default";
import {Book} from "~/ui/components/Book";
import {PAGE_PATH} from "~/features/application/constants/page";
import {useRouter} from "next/router";
import {getServerSideProps} from "~/views/pages/Books/beforeRender";
import {InferGetServerSidePropsType} from "next";
import classNames from "classnames";

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

    const [count,setCount] = useState<string>("");

    return (
        <div>
            <DefaultLayout>
                <div className="px-16 mt-16">
                    <SearchInput onSearch={handleSearch}/>
                    <div className="mt-16">
                        <div className="lib-tab flex justify-around items-center w-full h-40 rounded-lg border-2 border-solid font-black">
                            <button onClick={() => setCount("全て")} className={classNames({"text-white":count==="全て"})}>全て</button>
                            <button onClick={() => setCount("貸出可能")}>貸出可能</button>
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