import {DefaultLayout} from "~/ui/layouts/Default";
import inRange from 'lodash/inRange'
import {useMemo, useState} from 'react';
import classNames from "classnames";
import Link from "next/link";
import {PAGE_PATH} from "~/features/application/constants/page";
import {Heading} from "~/ui/components/Heading";
import {Infomation} from "~/ui/components/Infomation";
import {NameInput} from "~/ui/components/NameInput";
import {StudentIdInput} from "~/ui/components/StudentIdInput";

export const AccountUpdatePage = () => {
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

    const handleChangeName = (result: string) => {
        setName(result)
    }

    const handleChangeStudentId= (result: string) => {
        if (result.length >= 5) {
            return;
        }
        setStudentId(result)
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
                <Heading>アカウント更新</Heading>
                <NameInput name={name} onChange={handleChangeName}/>
                <StudentIdInput
                    studentId={studentId}
                    warning={isDisplayStudentIdError}
                    onChange={handleChangeStudentId}
                />
                <Infomation>
                    <p className="text-xxs">アカウント情報はログイン済みのユーザーしか確認できません</p>
                </Infomation>
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