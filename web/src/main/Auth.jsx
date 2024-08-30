import '../utils/dependences';
import '../utils/custom.css';

import React, { useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

import Routes from './Routes';
import Authenticate from '../reports/Authenticate';
import { validatedToken } from '../actions/authActions';

const AuthOrApp = () => {
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);
    const user = useSelector(state => state.user.personalInfo);

    useEffect(() => {
        if (auth.user) {
            dispatch(validatedToken(auth.user));
        }
    }, [auth.user, dispatch]);

    if (auth.user && auth.validToken) {
        axios.defaults.headers.common['authorization'] = auth.user;
        axios.defaults.headers.common['_id'] = user._id;

        return <Routes />;
    } else if (!auth.user) {
        return <Authenticate />;
    } else {
        return (
            <div style={{ 
                position: 'absolute', 
                left: '50%', 
                top: '40%', 
                transform: 'translate(-50%, -50%)' 
            }}>
                Loading
            </div>
        );
    }
};

export default AuthOrApp;
