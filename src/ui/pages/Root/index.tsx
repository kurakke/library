import {Book} from "~/ui/components/Book/index"
import {DefaultLayout} from "~/ui/layouts/Default";
import {getBookList} from "~/features/book/usecases/getBookList";
import {Hero} from "~/ui/pages/Root/_hero";
import {Heading2} from "~/ui/components/Heading2";
import {SearchInput} from "~/ui/components/SearchInput";

type User = {
    id: string;
};

export type Props = {
    user: User;
    user2: User;
};

export const RootPage = (props: Props) => {
    const bookList = getBookList();
    return (
        <DefaultLayout>
            <Hero/>
            <Heading2 className="mt-40 px-16">検索して本を探す</Heading2>
            <div className="w-full px-16">
                <SearchInput/>
                <Heading2 className="mt-32">本を一覧で見る</Heading2>
                {
                    bookList.list.map((book) =>
                        <li key={book.id}><Book book={book}/></li>
                    )
                }

            </div>
        </DefaultLayout>
    );
};
