import {DefaultLayout} from "~/ui/layouts/Default";
import inRange from 'lodash/inRange'
import {useMemo, useState} from 'react';
import classNames from "classnames";
import Link from "next/link";
import {PAGE_PATH} from "~/features/application/constants/page";

export const ProfilePage = () => {
    const [name, setName] = useState('')
    const [studentId, setStudentId] = useState('')

    const isValidName = useMemo(() => {
        return name.length > 0
    }, [name.length])

    const isValidStudentId = useMemo(() => {
        const pattern = /^([1-9]\d*|0)$/
        const minStudentId = 1101
        const maxStudentId = 5551
        return pattern.test(studentId) && inRange(Number(studentId), minStudentId, maxStudentId)
    }, [studentId])

    const isDisplayStudentIdError = useMemo(() => {
        return studentId.length > 0 && !isValidStudentId
    }, [isValidStudentId, studentId.length])

    const handleChangeName: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setName(e.target.value)
    }

    const handleChangeStudentId: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        if (e.target.value.length >= 5) {
            return;
        }
        setStudentId(e.target.value)
    }

    const handleSubmitForm: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()
        if (!(isValidStudentId && isValidName)) {
            return;
        }
        console.log({name, studentId})
    }

    return (
        <DefaultLayout>
            <form className="px-30 pt-12" onSubmit={handleSubmitForm}>
                <h1 className="text-2xl font-black text-gray-dark">アカウント更新</h1>
                <h2 className="mt-20 font-black text-gray-dark">氏名</h2>
                <input
                    type="text"
                    name="name"
                    className="mt-12 px-16 w-full h-40 rounded-2xl border border-gray-dark"
                    value={name}
                    placeholder="高専花子"
                    onChange={handleChangeName}
                />
                <h2 className="mt-12 font-black text-gray-dark">学籍番号</h2>
                <p className={classNames("mt-4 text-xs text-gray", {
                    "text-expressive-red": isDisplayStudentIdError
                })}>
                    {isDisplayStudentIdError ? "※ 半角数字４桁（数字４桁で入力してください)" : "※ 半角数字４桁"}
                </p>
                <input
                    type="tel"
                    name="student_id"
                    className={classNames("mt-8 px-16 w-full h-40 rounded-2xl border border-gray-dark", {
                        "text-expressive-red border-expressive-red": isDisplayStudentIdError
                    })}
                    value={studentId}
                    placeholder="0000"
                    onChange={handleChangeStudentId}
                />
                <div className="flex justify-center items-center mt-24 w-full h-40 rounded-2xl bg-brand-green-light">
                    <p className="text-xxs">アカウント情報はログイン済みのユーザーしか確認できません</p>
                </div>
                <div className="mt-20 flex flex-col items-center">
                    <button
                        type="submit"
                        disabled={!(isValidStudentId && isValidName)}
                        className={classNames("flex justify-center items-center w-200 h-40 rounded font-black text-white", {
                            "bg-gray-light": !(isValidStudentId && isValidName),
                            "bg-brand-green lib-pointer": isValidStudentId && isValidName
                        })}
                    >
                        保存する
                    </button>
                    <Link href={PAGE_PATH.Root}>
                        <a className="mt-20 font-black text-gray-dark lib-pointer">キャンセル</a>
                    </Link>
                </div>
            </form>
        </DefaultLayout>
    )
}