import { useEffect, useState } from 'react';
import { Amplify, Auth, Hub } from 'aws-amplify';
import { awsConfiguration } from 'awsConfiguration';

Amplify.configure({ Auth: awsConfiguration });

export const SignUpPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = async () => {
        try {
            await Auth.signUp({
                username: email,
                password,
                attributes: {
                    email
                }
            });
            onSignUpSuccess();
        } catch (error) {
            console.log('Error signing up: ', error);
        }
    };

    const onSignUpSuccess = () => {
        console.log('Sign up successful!');
    };

    return (
        <div>
            <h1>Sign Up</h1>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleSignUp}>Sign Up</button>
        </div>
    );
};
