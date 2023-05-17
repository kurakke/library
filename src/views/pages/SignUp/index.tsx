import { useEffect, useState } from 'react';
import { Auth, Hub } from 'aws-amplify';

export const SignUpPage = () => {
    const [user, setUser] = useState<any | null>(null);

    useEffect(() => {
        Hub.listen('auth', ({ payload: { event, data } }) => {
            switch (event) {
                case 'signIn':
                case 'cognitoHostedUI':
                    getUser().then(userData => setUser(userData));
                    break;
                case 'signOut':
                    setUser(null);
                    break;
                case 'signIn_failure':
                case 'cognitoHostedUI_failure':
                    console.log('Sign in failure', data);
                    break;
            }
        });

        getUser().then(userData => setUser(userData));
    }, []);

    const getUser = async () => {
        try {
            const userData = await Auth.currentAuthenticatedUser();
            // デバッグ用
            Auth.currentSession().then((data) => {
                console.log(`token: ${data.getIdToken().getJwtToken()}`);
            });
            console.log(userData);
            return userData;
        } catch (e) {
            return console.log('Not signed in');
        }
    }

    return user ? (
        <div>
            <p>サインイン済み</p>
            <p>ユーザー名: {user.username}</p>
            <button onClick={() => Auth.signOut()}>Sign Out</button>
        </div>
    ) : (
        <div>
            <p>
                サインインする
            </p>
            <button onClick={() => Auth.federatedSignIn()}>Sign In</button>
        </div>
    );
}