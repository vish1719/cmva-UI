import React, { Component } from "react";

export default class SuccessAlert extends Component {
    render() {
        return (
            <>
                <div className="alert alert-success" role="alert">
                    message sent successfully!
                </div>
            </>
        );
    }
}