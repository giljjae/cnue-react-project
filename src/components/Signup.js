// src/components/Signup.js
import React, { useState } from 'react';
import axios from 'axios';

function Signup() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/signup/', { username, password });
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
            <h2>처음 뵙겠습니다</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit">이걸로 하겠습니다.</button>
            </form>
            {message && <p>{message}</p>}
            <p>
                <a href="/login">사실 구면입니다</a>
            </p>
        </div>
    );
}

export default Signup;
