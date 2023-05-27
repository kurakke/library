import React, { useState } from 'react';
import { useAuth } from '~/features/auth/hooks/useAuth';

export const SignUpPage = () => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [studentNumber, setStudentNumber] = useState<string>('');
    const auth = useAuth();

    const handleSignUp = async () => {
        try {
            await auth.signUp({ name: name, email: email, studentNumber: studentNumber, password: password });
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
                </form>
            </div>
        </div>
    );
};