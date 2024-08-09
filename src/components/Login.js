// src/components/Login.js
import React, { useState } from 'react';
import axios from 'axios';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    // 환경 변수에서 API URL을 가져옵니다.
    const apiUrl = process.env.REACT_APP_API_URL;

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            // 하드코딩된 URL 대신 환경 변수를 사용합니다.
            const response = await axios.post(`${apiUrl}/login/`, { username, password });
            setMessage(response.data.message);
        } catch (error) {
            if (error.response) {
                setMessage(error.response.data.error || 'Unknown error');
            } else if (error.request) {
                setMessage('No response from server. Please try again.');
            } else {
                setMessage('Error: ' + error.message);
            }
        }
    };

    return (
        <div className="container">
            <h2>들어오십시오</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username: </label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password: </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit">들어갑니다</button>
            </form>
            {message && <p>{message}</p>}
            <p>
                <a href="/signup">사실 초면입니다</a>
            </p>
        </div>
    );
}

export default Login;
