import React, { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import Seo from '../../Seo';

function Loggedout(props) {
    const { Cmpo } = props;
    const history = useHistory();
    const location = useLocation(); // 🔍 this gives you the current route

    useEffect(() => {
        if (localStorage.getItem('token')) {
            history.push('/viewcontacts');
        }
    }, []);

    // Set SEO content based on the current path
    let seoProps = {
        title: 'ConnectMyVA',
        description: 'Welcome to ConnectMyVA.',
        path: location.pathname,
    };

    if (location.pathname === '/login') {
        seoProps = {
            title: 'Login | ConnectMyVA',
            description: 'Access your ConnectMyVA dashboard securely by logging in.',
            path: '/login',
        };
    } else if (location.pathname === '/signup') {
        seoProps = {
            title: 'Sign Up | ConnectMyVA',
            description: 'Create your ConnectMyVA account to get started.',
            path: '/signup',
        };
    }

    return (
        <div>
            <Seo {...seoProps} />
            <Cmpo />
        </div>
    );
}

export default Loggedout;
