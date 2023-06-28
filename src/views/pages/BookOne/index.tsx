import { useRouter } from "next/router";
import { DefaultLayout } from "~/ui/layouts/Default";
import { Book } from "~/ui/components/Book";
import { BookEntity } from "~/features/book/entities";
import { Heading } from "~/ui/components/Heading";
import React from "react";
import { Profile } from "~/ui/components/Profile";
import { InferGetServerSidePropsType } from "next";
import { getServerSideProps } from "~/views/pages/BookOne/beforeRender";

export const BookOne = ({
    book,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    const router = useRouter();
    const { bookId } = router.query;
    console.log(bookId);

    console.log(book);

    return (
        <DefaultLayout>
            <div className="px-16 mt-16">
                <Book book={book} isWithoutLink></Book>
            </div>
            <div className="mt-20 mx-16 border border-gray-light" />
            <div className="mt-16 mx-16">
                <Heading>過去の利用者</Heading>
                {book.lendRecords.map((user) => (
                    <li key={user.id}>
                        <Profile user={user} />
                    </li>
                ))}
            </div>
        </DefaultLayout>
    );
};
