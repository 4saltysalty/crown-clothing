import React from 'react';

import './homepage.styles.scss';

//  functional component
//  因為首頁不需要用到liftcycle、也沒有state要用到
const HomePage = () => (
    <div className="homepage">
        <div className="directory-menu">
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">HATS</h1>
                    <span className="subtitle">SHOP NOW</span>
                </div>
            </div>
        </div>
    </div>
)

export default HomePage;