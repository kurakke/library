import { createContext, useContext, useEffect, useState } from "react";
import { Amplify, Auth, Hub } from "aws-amplify";
import { awsConfiguration } from "../config/awsConfiguration";
import { Credentials } from "@aws-amplify/core";

Amplify.register(Auth);
Amplify.register(Credentials);
Amplify.configure({ Auth: awsConfiguration });
interface UseAuth {
    isLoading: boolean;
    isAuthenticated: boolean;
    username: string;
    userId: string;
    userEmail: string;
    password: string;
    signUp: (user: {
        name: string;
        email: string;
        studentNumber: string;
        password: string;
    }) => Promise<Result>;
    confirmSignUp: (
        verificationCode: string,
        email: string,
        password: string
    ) => Promise<Result>;
    signIn: (username: string, password: string) => Promise<Result>;
    signOut: () => void;
    resendSignUp: (email: string) => Promise<Result>;
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
    return (
        <authContext.Provider value={auth}> {children} </authContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(authContext);
};

export const useProvideAuth = (): UseAuth => {
    const [isLoading, setIsLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [userId, setUserId] = useState("");
    const [userEmail, setUserEmail] = useState("");

    useEffect(() => {
        Auth.currentAuthenticatedUser()
            .then((result) => {
                setUsername(result.username);
                setIsAuthenticated(true);
                setIsLoading(false);
                setUserId(result.attributes.sub);
                setUserEmail(result.attributes.email);
                console.log(result);
            })
            .catch(() => {
                setUsername("");
                setIsAuthenticated(false);
                setIsLoading(false);
                setUserEmail("");
            });
    }, []);

    const signUp: UseAuth["signUp"] = async (params) => {
        try {
            const result = await Auth.signUp({
                username: params.email,
                password: params.password,
            });
            if (!result.user) {
                throw new Error("ユーザー登録に失敗しました。");
            }
            const user = await fetch(
                `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/create`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        id: result.userSub,
                        name: params.name,
                        email: params.email,
                        studentNumber: params.studentNumber,
                    }),
                    mode: "cors",
                }
            ).then<User>((res) => {
                return res.json();
            });
            setUserId(user.id);
            setUsername(user.name);
            setIsAuthenticated(true);
            setPassword(params.password);
            setUserEmail(user.mail);
            return { success: true, message: "ユーザー登録に成功しました。" };
        } catch (error) {
            console.error(error);
            return {
                success: false,
                message: "認証に失敗しました。",
            };
        }
    };

    const confirmSignUp = async (
        verificationCode: string,
        email: string,
        password: string
    ) => {
        try {
            await Auth.confirmSignUp(email, verificationCode);
            const result = await signIn(email, password);
            setPassword("");
            return result;
        } catch (error) {
            console.error(error);
            return {
                success: false,
                message: "認証に失敗しました。",
            };
        }
    };

    const signIn = async (username: string, password: string) => {
        try {
            const result = await Auth.signIn(username, password);
            setUsername(result.username);
            setIsAuthenticated(true);
            setUserId(result.attributes.sub);
            setUserEmail(result.attributes.email);
            return { success: true, message: "認証に成功しました" };
        } catch (error) {
            console.error(error);
            return {
                success: false,
                message: "認証に失敗しました。",
            };
        }
    };

    const signOut = async () => {
        try {
            await Auth.signOut();
            setUsername("");
            setIsAuthenticated(false);
            setUserId("");
            setUserEmail("");
            return { success: true, message: "" };
        } catch (error) {
            return {
                success: false,
                message: "ログアウトに失敗しました。",
            };
        }
    };

    const resendSignUp = async (email: string) => {
        try {
            await Auth.resendSignUp(email);
            return { success: true, message: "確認コードを再送しました" };
        } catch (e) {
            console.error(e);
            return { success: true, message: "確認コードの再送に失敗しました" };
        }
    };

    return {
        isLoading,
        isAuthenticated,
        username,
        userId,
        userEmail,
        password,
        signUp,
        confirmSignUp,
        signIn,
        signOut,
        resendSignUp,
    };
};
