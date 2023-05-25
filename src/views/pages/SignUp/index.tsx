import { useEffect, useState } from 'react';
import { Amplify, Auth, Hub } from 'aws-amplify';
import { awsConfiguration } from '../../../features/auth/config/awsConfiguration'
import { Credentials } from '@aws-amplify/core'
import { useAuth } from '~/features/auth/hooks/useAuth';

export const SignUpPage = () => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [studentNumber, setStudentNumber] = useState<string>('');
    const auth = useAuth();

    const handleSignUp = async () => {
        try {
            const newUser = await auth.signUp(email, password);
            console.log('auth!!!!!!');
            console.log(newUser);
            onSignUpSuccess();
        } catch (error) {
            console.log('Error signing up: ', error);
        }
    };

    const onSignUpSuccess = () => {
        fetch(process.env.NEXT_PUBLIC_BACKEND_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id: auth.username, name: name, mail: email, studentNumber: 0 }),
        })
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
        <div>
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
                            studentNumber
                            <input type="text" name='studentnumber' value={studentNumber} onChange={handleStudentNumber} />
                        </label>
                    </div>
                    <div>
                        <label>
                            name
                            <input type="text" name='name' value={name} onChange={handleName} />
                        </label>
                    </div>
                    <div>
                        <label>
                            password
                            <input type="password" name='password' value={password} onChange={handlePassword} />
                        </label>
                    </div>
                    <button type='submit'>submit</button>
                    <div onClick={() => {
                        console.log(auth.username);

                    }}>
                        name
                    </div>
                </form>
            </div>
        </div>
    );
};