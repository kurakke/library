import { createContext, useContext, useEffect, useState } from 'react';
import { Amplify, Auth, Hub } from 'aws-amplify';
import { awsConfiguration } from '../config/awsConfiguration'
import { Credentials } from '@aws-amplify/core'

Amplify.register(Auth);
Amplify.register(Credentials);
Amplify.configure({ Auth: awsConfiguration });
interface UseAuth {
    isLoading: boolean;
    isAuthenticated: boolean;
    username: string;
    userId: string;
    signUp: (user: {
        name: string;
        email: string;
        studentNumber: string;
        password: string;
    }) => Promise<Result>;
    confirmSignUp: (verificationCode: string) => Promise<Result>;
    signIn: (username: string, password: string) => Promise<Result>;
    signOut: () => void;
}

interface Result {
    success: boolean;
    message: string;
}

interface User {
    id: string;
    name: string;
    mail: string;
    role: string;
    studentNumber: number;
}

const authContext = createContext({} as UseAuth);

export const ProvideAuth = ({ children }) => {
    const auth = useProvideAuth();
    return <authContext.Provider value={auth}> {children} </authContext.Provider>;
};

export const useAuth = () => {
    return useContext(authContext);
};

export const useProvideAuth = (): UseAuth => {
    const [isLoading, setIsLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [userId, setUserId] = useState('');

    // useEffect(() => {
    //     Auth.currentAuthenticatedUser()
    //         .then((result) => {
    //             setUsername(result.username);
    //             setIsAuthenticated(true);
    //             setIsLoading(false);
    //         })
    //         .catch(() => {
    //             setUsername('');
    //             setIsAuthenticated(false);
    //             setIsLoading(false);
    //         });
    // }, []);

    const signUp: UseAuth["signUp"] = async (params) => {
        try {
            const result = await Auth.signUp({
                username: params.email,
                password: params.password
            });
            if (!result.user) {
                throw new Error('ユーザー登録に失敗しました。');
            }
            const user = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/user/create`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id: result.userSub, name: params.name, email: params.email, studentNumber: params.studentNumber }),
            }).then<User>((res) => {
                return res.json();
            })
            setUserId(user.id);
            setUsername(user.name);
            setIsAuthenticated(true);
            setPassword(params.password);
            return { success: true, message: 'ユーザー登録に成功しました。' };
        } catch (error) {
            return {
                success: false,
                message: '認証に失敗しました。',
            };
        }
    };

    const confirmSignUp = async (verificationCode: string) => {
        try {
            console.log('userid' + userId);

            await Auth.confirmSignUp(userId, verificationCode);
            const result = await signIn(userId, password);
            setPassword('');
            return result;
        } catch (error) {
            return {
                success: false,
                message: '認証に失敗しました。',
            };
        }
    };

    const signIn = async (username: string, password: string) => {
        try {
            const result = await Auth.signIn(username, password);
            setUsername(result.username);
            setIsAuthenticated(true);
            setUserId(result.attributes.sub);
            return { success: true, message: '認証に成功しました' };
        } catch (error) {
            return {
                success: false,
                message: '認証に失敗しました。',
            };
        }
    };

    const signOut = async () => {
        try {
            await Auth.signOut();
            setUsername('');
            setIsAuthenticated(false);
            setUserId('');
            return { success: true, message: '' };
        } catch (error) {
            return {
                success: false,
                message: 'ログアウトに失敗しました。',
            };
        }
    };

    return {
        isLoading,
        isAuthenticated,
        username,
        userId,
        signUp,
        confirmSignUp,
        signIn,
        signOut,
    };
};