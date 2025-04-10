import React from 'react';
import { Link } from 'react-router-dom';

function SubsBanner() {
    return (
        <>
            <div className="banner">
                <img
                    src='../../assets/images/subscription.jpg'
                    alt="Subscription Plans Banner"
                    title="Subscription Plans"
                    className="bannerImage"
                />
            </div>
        </>
    );
}

export default SubsBanner;
