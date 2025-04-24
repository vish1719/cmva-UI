import React, { useEffect } from 'react';
// import {connect} from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

import { useHistory } from 'react-router';
// import Header from '../components/Header';


function Loggedout(props) {

    let Cmpo = props.Cmpo

    const history = useHistory();
    useEffect(() => {
        if (localStorage.getItem('token')) {
            history.push('/viewcontacts')
        }
    }, [])
    return (
        
      
        <div>
            <Cmpo />
        </div>
        
    )
}

export default Loggedout;