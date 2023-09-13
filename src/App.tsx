import React, {useCallback, useState} from 'react';
import logo from './logo.svg';
import './App.css';

interface User {
    username: string;
    email?: string;
}

function App() {
    const [user, setUser] = useState<User>();

    const login = useCallback(() => {
        setUser({
            username: 'guang',
            email: 'xxx@333.com'
        })
    }, []);

    return (
        <div className="App">
            {
                user?.username ? <h2>Current User: {user.username}</h2> :
                    <button onClick={login}>login</button>
            }
        </div>
    );
}

export default App;
