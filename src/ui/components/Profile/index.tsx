import React from "react";

export const Profile = () =>{
    return (
        <div className="flex mt-16">
            <div className="mr-16 w-56 h-56 rounded-full bg-expressive-red"/>
            <div>
                <div className="font-black text-gray-dark text-sm">9999-高専太郎</div>
                <div className="text-gray-dark text-xxs">(プロフィール最終更新日：2019年3月1日)</div>
                <div className="text-gray-dark text-xxs">2022年2月11日に返却</div>
            </div>
        </div>
    )
}
