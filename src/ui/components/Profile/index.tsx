import React from "react";
import {UserEntity} from "~/features/user/entities";
import dayjs from "dayjs";

export type Props = {
    user:UserEntity;
}

export const Profile = ({user}:Props) =>{
    const updateAt = dayjs(user.updateAt).format("YYYY年MM月DD日")
    const returnAt = dayjs(user.returnAt).format("YYYY年MM月DD日")
    return (
        <div className="flex mt-16">
            <div className="mr-16 w-56 h-56 rounded-full bg-expressive-red"/>
            <div>
                <div className="font-black text-gray-dark text-sm">{user.fullName}</div>
                <div className="text-gray-dark text-xxs">(プロフィール最終更新日：{updateAt})</div>
                <div className="text-gray-dark text-xxs">{returnAt}に返却</div>
            </div>
        </div>
    )
}
