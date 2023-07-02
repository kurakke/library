import React, { ChangeEvent, useEffect, useState } from "react";
import { useAuth } from "~/features/auth/hooks/useAuth";
import { DefaultLayout } from "~/ui/layouts/Default";
import { Heading2 } from "~/ui/components/Heading2";
import { useRouter } from "next/router";
import { toast } from "react-hot-toast";

export const ConfirmPage = () => {
    const auth = useAuth();
    const [confirmCode, setConfirmCode] = useState<string>("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    useEffect(() => {
        console.log(auth);
        setEmail(auth.userEmail);
    }, [auth.userEmail]);

    useEffect(() => {
        console.log(auth.password);
        setPassword(auth.password);
    }, [auth.password]);

    const handleConfrimCode = (event) => {
        setConfirmCode(event.target.value);
    };
    const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };
    const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };
    const handleConfirm = async () => {
        console.log(auth);
        const res = await auth.confirmSignUp(confirmCode, email, password);
        if (res.success) {
            toast("新規登録に成功しました");
            router.push("/");
        } else {
            toast("認証に失敗しました");
        }
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("submit");
        handleConfirm();
    };
    const handleResendConfirmCode = () => {
        console.log(auth);
        auth.resendSignUp(email);
    };

    return (
        <DefaultLayout disableCtrls>
            <div className="px-30 mt-20">
                <div>
                    <form onSubmit={handleSubmit}>
                        <div className="flex flex-col">
                            <Heading2>認証コード入力</Heading2>
                            <h1 className="text-xs text-gray-dark">
                                登録したメールアドレスに送られてきた数字４桁を入力してください
                            </h1>
                            <input
                                className="w-370 h-40 px-10 mt-12 border rounded"
                                type="text"
                                name="confirmCode"
                                value={confirmCode}
                                onChange={handleConfrimCode}
                            />
                            <label className="text-gray-dark mt-12">
                                パスワードを入力
                            </label>
                            <input
                                type="password"
                                value={password}
                                onChange={handlePassword}
                                className="w-370 h-40 px-10 border rounded mt-12"
                            />
                            <div className="flex justify-center mt-20">
                                <button
                                    className="w-200 h-40 px-30 bg-brand-green text-white rounded"
                                    type="submit"
                                >
                                    認証する
                                </button>
                            </div>
                            <label className="text-gray-dark m-[8px]">
                                確認コードを送るメールアドレスを入力
                            </label>
                            <input
                                type="text"
                                value={email}
                                onChange={handleEmail}
                                className="w-370 h-40 px-10 border rounded"
                            />
                            <button
                                className="mt-4 font-black text-brand-green"
                                type="button"
                                onClick={handleResendConfirmCode}
                            >
                                メールを再送する
                            </button>
                        </div>
                        <div>
                            {/*<button className="w-200 h-40 bg-brand-green text-white rounded" type='submit'>保存</button>*/}
                        </div>
                    </form>
                </div>
            </div>
        </DefaultLayout>
    );
};
