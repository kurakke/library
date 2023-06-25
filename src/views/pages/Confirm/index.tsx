import React, { ChangeEvent, useEffect, useState } from "react";
import { useAuth } from "~/features/auth/hooks/useAuth";

export const ConfirmPage = () => {
    const auth = useAuth();
    const [confirmCode, setConfirmCode] = useState<string>("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

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
    const handleConfirm = () => {
        console.log(auth);
        auth.confirmSignUp(confirmCode, email, password);
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
        <div>
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>confirmCode</label>
                        <input
                            type="text"
                            name="confirmCode"
                            value={confirmCode}
                            onChange={handleConfrimCode}
                        />
                    </div>
                    <label>確認コードを送るメールアドレス</label>
                    <input type="text" value={email} onChange={handleEmail} />
                    <button type="button" onClick={handleResendConfirmCode}>
                        確認コードを再送
                    </button>
                    <label>password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={handlePassword}
                    />
                    <button type="submit">submit</button>
                </form>
            </div>
        </div>
    );
};
