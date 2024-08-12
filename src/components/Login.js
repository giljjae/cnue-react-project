import React, { useState } from 'react';
import axios from 'axios';
import '/home/kgj/load/cnue-react-project/src/App.css'; // 스타일을 적용하기 위해 import합니다.

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post(process.env.REACT_APP_API_URL + '/api/login/', { username, password });
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
        <div className="home-container">
            <div className="home-box">
                <h2 className="home-heading">로그인</h2>
                <form onSubmit={handleSubmit} className="login-form">
                    <div className="form-group">
                        <label htmlFor="username">ID : </label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="form-input"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password : </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="form-input"
                        />
                    </div>
                    <button type="submit" className="home-button">로그인</button>
                </form>
                {message && <p className="form-message">{message}</p>}
                <p>
                    <a href="/signup" className="home-link">회원가입</a>
                </p>
            </div>
        </div>
    );
}

export default Login;
