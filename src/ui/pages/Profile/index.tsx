import {Header} from "~/ui/components/Header";
import {DefaultLayout} from "~/ui/layouts/Default";

export const ProfilePage = () => {
    return (
        <DefaultLayout>
            <div className="px-30 pt-12">
                <h1 className="text-2xl font-black text-gray-dark">アカウント更新</h1>
                <h2 className="mt-20 font-black text-gray-dark">氏名</h2>
                <div className="mt-12 w-full h-40 rounded-2xl border border-gray-dark"></div>
                <h2 className="mt-12 font-black text-gray-dark">学籍番号</h2>
                <p className="mt-4 text-xs text-gray">※数字４桁</p>
                <div className="mt-8 w-full h-40 rounded-2xl border border-gray-dark"></div>
                <div className="flex justify-center items-center mt-24 w-full h-40 rounded-2xl bg-brand-green-light">
                    <p className="text-xxs">アカウント情報はログイン済みのユーザーしか確認できません</p>
                </div>
                <div className="mt-20 flex flex-col items-center">
                    <div className="flex justify-center items-center w-200 h-40 rounded font-black bg-brand-green">
                        <p className="text-white">保存する</p>
                    </div>
                    <p className="mt-20 font-black text-gray-dark">キャンセル</p>
                </div>
            </div>
        </DefaultLayout>
    )
}