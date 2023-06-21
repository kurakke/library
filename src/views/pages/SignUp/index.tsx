import React, { useState } from 'react';
import { useAuth } from '~/features/auth/hooks/useAuth';
import { NextRouter, useRouter } from 'next/router';
import { PAGE_PATH } from "~/features/application/constants/page";
import { DefaultLayout } from "~/ui/layouts/Default";
import {Heading} from "~/ui/components/Heading";
import {NameInput} from "~/ui/components/NameInput";

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

    return (
        <DefaultLayout disableCtrls>
        <div className="flex flex-col justify-center px-30">
            <Heading>アカウント作成</Heading>
            <div　className="text-gray-dark font-black">
                <form onSubmit={handleSubmit}>
                    <div className="mt-20 mb-12">
                        <div>メールアドレス</div>
                        <label>
                            <input className="w-370 h-40 px-10 border rounded" type="text" name='email' value={email} onChange={handleEmail} />
                        </label>
                    </div>
                    <div　className="mb-20">
                        <div>学籍番号</div>
                        <div className="text-xxs text-gray">※数字四桁</div>
                        <label>
                            <input className="w-370 h-40 px-10 border rounded" type="text" name='studentnumber' value={studentNumber} onChange={handleStudentNumber} />
                        </label>
                    </div>
                    <div className="flex flex-col mb-20">
                        <div>氏名</div>
                        <label>
                            <input className="w-370 h-40 px-10 border rounded" type="text" name='name' value={name} onChange={handleName} />
                        </label>
                    </div>
                    <div className="mb-12">
                        <div>パスワード</div>
                        <label>
                            <input className="w-370 h-40 px-10 border rounded" type="password" name='password' value={password} onChange={handlePassword} />
                        </label>
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