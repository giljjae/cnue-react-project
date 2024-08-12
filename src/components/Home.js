import React from 'react';
import { Link } from 'react-router-dom';
import '/home/kgj/load/cnue-react-project/src/App.css'; // 스타일을 적용하기 위해 import합니다.

function Home() {
    return (
        <div className="home-container">
            <div className="home-box">
                <h2 className="home-heading">심리척도 해석 프로그램</h2>
                <div className="home-links">
                    <Link to="/login" className="home-button">계정이 있습니다.</Link>
                    <Link to="/signup" className="home-button">처음 방문했습니다.</Link>
                </div>
                <img src="/logo.png" alt="Logo" className="home-logo" />
                <p>본 프로그램은 심리 검사 척도 해석에 도움을 줄 수 있으나<br></br> 전문가의 의견이 아님을 밝힙니다. </p>
                <p>ⓒ 2024. 문화소프트 Inc. all rights reserved. </p>
            </div>
            
        </div>
    );
}

export default Home;
