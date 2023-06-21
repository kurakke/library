import React, { useState } from 'react';
import { useAuth } from '~/features/auth/hooks/useAuth';
import { NextRouter, useRouter } from 'next/router';
import { PAGE_PATH } from "~/features/application/constants/page";
import { DefaultLayout } from "~/ui/layouts/Default";
import {Heading} from "~/ui/components/Heading";

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
                        <label>
                            メールアドレス
                            <input type="text" name='email' value={email} onChange={handleEmail} />
                        </label>
                        <div className="px-20 h-40 border rounded"/>
                    </div>
                    <div className="mb-12">
                        <label>
                            学籍番号
                            <input type="text" name='studentnumber' value={studentNumber} onChange={handleStudentNumber} />
                        </label>
                        <div className="text-xxs text-gray">※数字四桁</div>
                        <div className="px-20 h-40 border rounded"/>
                    </div>
                    <div className="mb-12">
                        <label>
                            名前
                            <input type="text" name='name' value={name} onChange={handleName} />
                        </label>
                        <div className="px-20 h-40 border rounded"/>
                    </div>
                    <div className="mb-12">
                        <label>
                            パスワード
                            <input type="password" name='password' value={password} onChange={handlePassword} />
                        </label>
                        <div className="px-20 h-40 border rounded"/>
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