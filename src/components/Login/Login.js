import React, { useState } from 'react';
import { Button, FormGroup, Input, FormFeedback } from 'reactstrap';

import './Login.scss';

export default function Login({
    onLoginSuccess,
}) {

    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const onLogin = () => {
        if (!password) {
            setError('Password is required');
            return;
        }
        if (password !== 'aishu1') {
            setError('Password is incorrect');
            return;
        }
        onLoginSuccess();
    };

    const onChange = ({ target }) => {
        setPassword(target.value);
        setError(target.value ? false : 'Password is required');
    };

    return <div className="container login-container">
        <div className="row">
            <div className="col-sm-12 col-xl-4 col-lg-4 col-md-4 col-12">
                <FormGroup>
                    <Input invalid={!!(error)} onChange={onChange} value={password} type="password" name="password" placeholder="Enter password" />
                    <FormFeedback tooltip>{error}</FormFeedback>
                </FormGroup>
            </div>
            <div className="col-sm-12 col-xl-4 col-lg-4 col-md-4 col-12">
                <Button onClick={onLogin} color="primary">Login</Button>
            </div>
        </div>
    </div>
}

