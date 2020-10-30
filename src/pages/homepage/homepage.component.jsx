import React from 'react';

import Directory from '../../components/directory/directory.component';

import './homepage.styles.scss';


//  functional component
//  因為首頁不需要用到liftcycle、也沒有state要用到
const HomePage = () => (
    <div className="homepage">
        <Directory />
    </div>
)

export default HomePage;