import { DefaultLayout } from "~/ui/layouts/Default";
import {Hero} from "~/ui/pages/Root/_hero";
import {Book} from "~/ui/components/Book/index"

type User = {
    id: string;
};

export type Props = {
    user: User;
    user2: User;
};

const Book1 ={
    title:"pya",
    info:"wa-i",
}

export const RootPage = (props: Props) => {
    return (
        <DefaultLayout>
            <Hero/>
            <div className="w-full px-16">
                <h2 className="font-black text-gray-dark mt-32">本を一覧で見る</h2>
                <Book book={Book1}/>
            </div>
        </DefaultLayout>
    );
};
