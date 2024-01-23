import axios from 'axios';
import * as actionTypes from './actionTypes';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Redirect } from 'react-router';
// import { useHistory } from 'react-router';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

export const authSuccess = token => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: token,
    }
}

export const authFail = error => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error,
    }
}

export const authLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    
        
    
    // window.location.replace("/about");
    
    return {
        type: actionTypes.AUTH_LOGOUT,
        
    };
    
}

export const setAuthTimeout = (expirationTime) => {
    
    return (dispatch) => {
        setTimeout(() => {
            dispatch(authLogout());
        }, expirationTime * 1000);
        
    }
}

// let history = useHistory();
export const authLogin = (email, password) => {
   
    
    return dispatch => {
        dispatch(authStart());
        axios.post('http://127.0.0.1:8000/rest-auth/login/', {
             email,
             password,
        })
        .then((res) => {
            const token = res.data.key;
            const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
            localStorage.setItem('token', token);
            localStorage.setItem('expirationDate', expirationDate);
             dispatch(authSuccess(token));
            dispatch(setAuthTimeout(3600));
            
            toast.success('Successfully Logged in!', {position: toast.POSITION.TOP_CENTER});
            // window.alert("Successfully Logged in!")
            window.location.replace("/dashboard");
            // toast.success('Successfully Logged in!', {position: toast.POSITION.TOP_CENTER});
            // window.alert("you are Logged in now")
            // history.push('viewcontacts');
        })
        .catch(err => {
            toast.error('There are items that require your attention!', {position: toast.POSITION.TOP_CENTER});
            dispatch(authFail(err));
            
            // this.setState({alert_message:"error"});
            // setErrors(error.response.data.errors);
            
            // window.location.replace("/contact2");
        })
    }
}

export const authSignup = (first_name, middle_name, last_name, email, phone, address, city, country, password1, password2) => {
    // const history = useHistory();
    return dispatch => {
        dispatch(authStart());
        axios.post('http://127.0.0.1:8000/rest-auth/registration/', {
            first_name, 
            middle_name, 
            last_name,  
            email, 
            phone,  
            address, 
            city, 
            country, 
            password1, 
            password2,
        })
        .then(res => {
            // const token = res.data.key;
            // const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
            // localStorage.setItem('token', token);
            // localStorage.setItem('expirationDate', expirationDate);
            // dispatch(authSuccess(token));
            // dispatch(setAuthTimeout(3600));
            // toast.success('Please check your email and click on the link to activate your account!', {position: toast.POSITION.TOP_CENTER});
            window.alert("Please check your email and click on the link to activate your account!")
            window.location.replace("/emailsent");
            // history.push("/emailsent");
        })
        .catch((err) => {
            toast.error('Invalid Credentials!', {position: toast.POSITION.TOP_CENTER});
            dispatch(authFail(err));
            // window.location.replace("/contact2");  
        })
    }
}

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if (token === undefined || token === null) {
            dispatch(authLogout());
            // window.location.replace("/");
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            if ( expirationDate <= new Date() ) {
                dispatch(authLogout());
                // window.location.replace("/");
            } else {
                dispatch(authSuccess(token));
                dispatch(setAuthTimeout( (expirationDate.getTime() - new Date().getTime()) / 1000) );
            }
        }
    }
}