import React, { useState } from 'react';

import Login from '../Login/Login';
import SlideShow from '../SlideShow/SlideShow';

export default function LandingPage() {

    const [isLogin, setIsLogin] = useState(false);

    const onLoginSuccess = () => {
        setIsLogin(true);
    };

    return <div>
        {isLogin ? <SlideShow /> : <Login onLoginSuccess={onLoginSuccess} />}
    </div>
}

