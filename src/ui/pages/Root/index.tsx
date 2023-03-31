import {Book} from "~/ui/components/Book/index"
import {DefaultLayout} from "~/ui/layouts/Default";
import {getBookList} from "~/features/book/usecases/getBookList";
import {Hero} from "~/ui/pages/Root/_hero";

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
            <div className="w-full px-16">
                <h2 className="font-black text-gray-dark mt-32">本を一覧で見る</h2>

                {
                    bookList.list.map((book) =>
                        <li key={book.id}><Book book={book}/></li>
                    )
                }

            </div>
        </DefaultLayout>
    );
};
