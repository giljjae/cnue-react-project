// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="container">
            <h2>혼저옵서예</h2>
            <p>
                <Link to="/login">구면입니다
                </Link> | <Link to="/signup">초면입니다</Link>
            </p>
        </div>
    );
}

export default Home;
