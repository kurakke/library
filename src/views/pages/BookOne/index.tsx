import {useRouter} from "next/router";
import {DefaultLayout} from "~/ui/layouts/Default";
import {Book} from "~/ui/components/Book";
import {BookEntity} from "~/features/book/entities";
import {Heading} from "~/ui/components/Heading";
import React from "react";
import {Profile} from "~/ui/components/Profile";

// export type Props = {
//     book: BookEntity;
// };
export const BookOne = () => {
    const router = useRouter();
    const { bookId }  = router.query;
    const book:BookEntity = {
        id: "1000",
        title: "pa",
        info:"pya",
    };

    return (
            <DefaultLayout>
                    <div className="px-16 mt-16">
                        <Book book={book}></Book>
                    </div>
                <div className="mt-20 mx-16 border border-gray-light"/>
                <div className="mt-16 mx-16">
                <Heading>過去の利用者</Heading>
                    <Profile/>
                    <Profile/>
                    <Profile/>
                </div>
            </DefaultLayout>
    );
}