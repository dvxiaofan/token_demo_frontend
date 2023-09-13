import React, {useCallback, useState} from 'react';
import './App.css';
import {aaa, userLogin} from "./interface";

interface User {
    username: string;
    email?: string;
}

function App() {
    const [user, setUser] = useState<User>();

    const login = useCallback(async () => {
        const res = await userLogin('ccyou', '999999');

        const { userInfo, accessToken, refreshToken } = res?.data || {};

        setUser(userInfo);

        localStorage.setItem('access_token', accessToken);
        localStorage.setItem('refresh_token', refreshToken);

    }, []);

    const xxx = useCallback(async () => {
        const res = await aaa();

        console.log(res);
    }, []);

    return (
        <div className="App">
            {
                user?.username ? <h2>Current User: {user.username}</h2> :
                    <button onClick={login}>login</button>
            }
            <div>
                <button onClick={xxx}>aaa</button>
            </div>
        </div>
    );
}

export default App;
