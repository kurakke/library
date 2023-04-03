import {DefaultLayout} from "~/ui/layouts/Default";
import {Heading} from "~/ui/components/Heading";
import {Heading2} from "~/ui/components/Heading2";
import {Book} from "~/ui/components/Book";
import {getBookList} from "~/features/book/usecases/getBookList";
import SettingIcon from "~assets/svgs/setting.svg";
import Image from "next/image";
import React from "react";

export const AccountPage = () => {
    const bookList = getBookList()
    const returned = getBookList()
    return (
        <DefaultLayout disableCtrls>
            <div className="px-30 font-black">
                <Heading>アカウント情報</Heading>
                <div className="flex mt-32 pb-12 border-gray-light border-b">
                    <div className="w-56 h-56 rounded-full bg-expressive-red"/>
                    <div className="mx-12 flex-grow">
                        <div className="font-xs text-gray-dark">学籍番号:3450</div>
                        <div className="text-gray-dark">高専花子</div>
                    </div>
                    <Image src={SettingIcon}/>
                </div>
                <div className="pb-12 mt-12 border-gray-light border-b">
                    <Heading2>利用中の書籍</Heading2>
                    {
                        bookList.list.map((book) =>
                            <li key={book.id}><Book book={book}/></li>
                        )
                    }
                </div>
                <div className="mt-12">
                    <Heading2>返却済みの書籍</Heading2>
                    {
                        returned.list.map((book) =>
                            <li key={book.id}><Book book={book}/></li>
                        )
                    }
                </div>
            </div>
        </DefaultLayout>
    )
}