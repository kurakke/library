import { useState } from "react";
import { DefaultLayout } from "~/ui/layouts/Default";
import React from "react";
import { useAuth } from "~/features/auth/hooks/useAuth";

export const SignInPage = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const auth = useAuth();

    const handleSignIn = async () => {
        try {
            const user = await auth.signIn(email, password);
            console.log('auth!!!!!!');
            console.log(user);
        } catch (error) {
            console.log('Error signing in: ', error);
        }
    };
    const handleEmail = (event) => {
        setEmail(event.target.value);
    }
    const handlePassword = (event) => {
        setPassword(event.target.value);
    }

    const handleSubmit = () => {
        event.preventDefault();
        handleSignIn();
    }
    return (
        <DefaultLayout disableCtrls>
            <h1 className="mb-16  text-5xl font-bold">Signin</h1>
            <p className="mb-28 text-white text-sm lg:text-lg">XXXX</p>
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>
                            email
                            <input type="text" name='email' value={email} onChange={handleEmail} />
                        </label>
                    </div>
                    <div>
                        <label>
                            password
                            <input type="password" name='password' value={password} onChange={handlePassword} />
                        </label>
                    </div>
                    <button type='submit'>submit</button>
                </form>
            </div>
        </DefaultLayout>
    );
};
