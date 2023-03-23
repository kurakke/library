import {DefaultLayout} from "~/ui/layouts/Default";
import {Hero} from "~/ui/pages/Root/_hero";
import {Book} from "~/ui/components/Book/index"

type User = {
    id: string;
};

export type Props = {
    user: User;
    user2: User;
};

const Book1 = [
    {
        title: "pya",
        info: "wa-i",
    },
    {
        title: "pyu",
        info: "wa-u",
    },
    {
        title: "pyo",
        info: "wa-e",
    },
]
export const RootPage = (props: Props) => {
    return (
        <DefaultLayout>
            <Hero/>
            <div className="w-full px-16">
                <h2 className="font-black text-gray-dark mt-32">本を一覧で見る</h2>

                {
                    Book1.map((book, i) =>
                        <li key={i}><Book book={book}/></li>
                    )
                }

            </div>
        </DefaultLayout>
    );
};
