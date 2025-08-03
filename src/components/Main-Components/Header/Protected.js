/* eslint-disable */
import React, { useEffect } from 'react';
// import {connect} from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { useHistory } from 'react-router';
// import Header from '../components/Header';

function Loggedin(props) {

    let Cmp = props.Cmp

    const history = useHistory();
    useEffect(() => {
        if (!localStorage.getItem('token')) {
            history.push('/login')
        }
    }, [])
    return (
        <div>
            <Cmp />
        </div>
    )
}

export default Loggedin;