import { DefaultLayout } from "~/ui/layouts/Default";
import { Heading } from "~/ui/components/Heading";
import { Heading2 } from "~/ui/components/Heading2";
import { Book } from "~/ui/components/Book";
import { InferGetServerSidePropsType } from "next";
import SettingIcon from "~/assets/svgs/setting.svg";
import Image from "next/image";
import React from "react";
import { getServerSideProps } from "~/views/pages/Account/beforeRender";

export const AccountPage = ({
    user,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    const rental = user.lendRecords.filter((lendRecord) => {
        return lendRecord.returnedDate === null;
    });

    const returned = user.lendRecords.filter((lendRecord) => {
        return lendRecord.returnedDate !== null;
    });

    return (
        <DefaultLayout disableCtrls>
            <div className="px-30 font-black">
                <Heading>アカウント情報</Heading>
                <div className="flex mt-32 pb-12 border-gray-light border-b">
                    <div className="w-56 h-56 rounded-full bg-expressive-red" />
                    <div className="mx-12 flex-grow text-gray-dark">
                        <div className="font-xs">
                            学籍番号:{user.studentNumber}
                        </div>
                        <div>{user.name}</div>
                    </div>
                    <Image src={SettingIcon} />
                </div>
                <div className="pb-12 mt-12 border-gray-light border-b">
                    <Heading2>利用中の書籍</Heading2>
                    {rental.map((lendRecord) => (
                        <li key={lendRecord.book.id}>
                            <Book book={lendRecord.book} />
                        </li>
                    ))}
                </div>
                <div className="mt-12">
                    <Heading2>返却済みの書籍</Heading2>
                    {returned.map((lendRecord) => (
                        <li key={lendRecord.book.id}>
                            <Book book={lendRecord.book} />
                        </li>
                    ))}
                </div>
            </div>
        </DefaultLayout>
    );
};
