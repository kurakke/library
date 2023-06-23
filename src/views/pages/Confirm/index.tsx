import React,{useState} from "react";
import { useAuth } from "~/features/auth/hooks/useAuth";
import {DefaultLayout} from "~/ui/layouts/Default";
import {Heading2} from "~/ui/components/Heading2";

export const ConfirmPage = () => {
    const auth = useAuth();
    const [confirmCode, setConfirmCode] = useState<string>('');

    const handleConfrimCode = (event) => {
        setConfirmCode(event.target.value);
    }
    const handleConfirm = () => {
        auth.confirmSignUp(confirmCode);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('submit');
        handleConfirm();
    }

    return (
        <DefaultLayout disableCtrls>
            <div className="px-30 mt-20">
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col">
                       <Heading2>認証コード入力</Heading2>
                        <h1 className="text-xs text-gray-dark">登録したメールアドレスに送られてきた数字４桁を入力してください</h1>
                        <input className="w-370 h-40 px-10 mt-12 border rounded" type="text" name="confirmCode" value={confirmCode} onChange={handleConfrimCode} />
                        <div className="flex justify-center mt-20">
                        <button className="w-200 h-40 px-30 bg-brand-green text-white rounded">認証する</button>
                        </div>
                        <button className="mt-4 font-black text-brand-green">メールを再送する</button>
                    </div>
                    <div>
                        {/*<button className="w-200 h-40 bg-brand-green text-white rounded" type='submit'>保存</button>*/}
                    </div>
                </form>
            </div>
            </div>
        </DefaultLayout>
    )
}