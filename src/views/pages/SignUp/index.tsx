import React, {useMemo, useState} from 'react';
import { useAuth } from '~/features/auth/hooks/useAuth';
import { NextRouter, useRouter } from 'next/router';
import { PAGE_PATH } from "~/features/application/constants/page";
import { DefaultLayout } from "~/ui/layouts/Default";
import {Heading} from "~/ui/components/Heading";
import {PasswordInput} from "~/ui/components/PasswordInput";
import inRange from "lodash/inRange";

export const SignUpPage = () => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [studentNumber, setStudentNumber] = useState<string>('');
    const auth = useAuth();
    const router = useRouter();

    const handleSignUp = async () => {
        try {
            const result = await auth.signUp({ name: name, email: email, studentNumber: studentNumber, password: password });
            if (result.success) {
                router.push(PAGE_PATH.Confirm);
            }
        } catch (error) {
            console.log('Error signing up: ', error);
        }
    };

    const handleChangePassword= (result: string) => {
        const pattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]+$/;
        // if (pattern.test(result)) {
        //     return;
        // }
            setPassword(result);
    };


    const handleName = (event) => {
        setName(event.target.value);
    }
    const handleEmail = (event) => {
        setEmail(event.target.value);
    }
    const handlePassword = (event) => {
        setPassword(event.target.value);
    }
    const handleStudentNumber = (event) => {
        setStudentNumber(event.target.value);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('post');
        handleSignUp();
    }

    const isValidPassword = useMemo(() => {
        const pattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#_$%^&*()-])[A-Za-z\d!@#$%^&*()_-]+$/
        console.log(password);
        return pattern.test(password);
    }, [password]);

    const isDisplayPasswordError = useMemo(() => {
        return password.length > 0 && !isValidPassword;
    }, [isValidPassword, password.length]);



    return (
        <DefaultLayout disableCtrls>
        <div className="flex flex-col justify-center px-30">
            <Heading>アカウント作成</Heading>
            <div　className="text-gray-dark font-black">
                <form onSubmit={handleSubmit}>
                    <div className="mt-20 mb-12">
                        <div>メールアドレス</div>
                        <label>
                            <input placeholder="xxxxx@gmail.com" className="w-full h-40 px-16 mt-12 border rounded-2xl" type="text" name='email' value={email} onChange={handleEmail} />
                        </label>
                    </div>
                    <div　className="mb-20">
                        <div>学籍番号</div>
                        <div className="text-xs text-gray">※数字４桁</div>
                        <label>
                            <input placeholder="0000" className="w-full h-40 px-16 mt-12 border rounded-2xl" type="text" name='studentnumber' value={studentNumber} onChange={handleStudentNumber} />
                        </label>
                    </div>
                    <div className="flex flex-col mb-20">
                        <div>氏名</div>
                        <label>
                            <input placeholder="高専花子" className="w-full h-40 px-16 mt-12 border rounded-2xl" type="text" name='name' value={name} onChange={handleName} />
                        </label>
                    </div>
                    <div className="mb-12">
                        <PasswordInput password={password} warning={isDisplayPasswordError} onChange={handleChangePassword} />

                        {/*<label>*/}
                        {/*    <input className="w-full h-40 px-16 mt-12 border rounded-2xl" type="password" name='password' value={password} onChange={handlePassword} />*/}
                        {/*</label>*/}
                    </div>
                    <div className="flex justify-center mt-20">
                        <button className="w-200 h-40 bg-brand-green text-white rounded" type='submit'>保存</button>
                    </div>
                </form>
            </div>
        </div>
        </DefaultLayout>
    );
};