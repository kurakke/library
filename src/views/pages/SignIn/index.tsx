import { useState } from "react";
import { DefaultLayout } from "~/ui/layouts/Default";
import React from "react";
import { useAuth } from "~/features/auth/hooks/useAuth";
import { Heading } from "~/ui/components/Heading";
import Link from "next/link";
import { useRouter } from "next/router";

export const SignInPage = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const auth = useAuth();
    const router = useRouter();

    const handleSignIn = async () => {
        try {
            const user = await auth.signIn(email, password);
            console.log("auth!!!!!!");
            console.log(user);
        } catch (error) {
            console.log("Error signing in: ", error);
        }
    };
    const handleEmail = (event) => {
        setEmail(event.target.value);
    };
    const handlePassword = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const user = await auth.signIn(email, password);
            console.log("auth!!!!!!");
            console.log(user);
            // ログイン成功時にアカウントページに遷移
            router.push("/account");
        } catch (error) {
            console.log("Error signing in: ", error);
        }
    };

    return (
        <DefaultLayout disableCtrls>
            <div className="flex flex-col justify-center px-30">
                <Heading>ログイン</Heading>
                <div className="text-gray-dark font-black">
                    <div>
                        <form onSubmit={handleSubmit}>
                            <div className="mt-20 mb-12">
                                <div>メールアドレス</div>
                                <label>
                                    <input
                                        className="w-full h-40 px-10 mt-12 border rounded-2xl"
                                        type="text"
                                        name="email"
                                        value={email}
                                        onChange={handleEmail}
                                    />
                                </label>
                            </div>
                            <div className="mt-20 mb-12">
                                <div>パスワード</div>
                                <label>
                                    <input
                                        className="w-full h-40 mt-12 px-10 border rounded-2xl"
                                        type="password"
                                        name="password"
                                        value={password}
                                        onChange={handlePassword}
                                    />
                                </label>
                            </div>
                            <div className="flex justify-center mt-20">
                                <button
                                    className="w-200 h-40 mt-12 bg-brand-green text-white rounded"
                                    type="submit"
                                    onClick={handleSubmit}
                                >
                                    保存
                                </button>
                            </div>
                            <div className="flex justify-center mt-20">
                                <div className="flex justify-center mt-20">
                                    新規登録は
                                    <Link href="/signup">
                                        <a className="text-brand-green border-b-2">
                                            こちら
                                        </a>
                                    </Link>
                                    から
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </DefaultLayout>
    );
};
