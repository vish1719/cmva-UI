import React, { Component } from "react";

export default class ErrorAlert extends Component {
    render() {
        return (
            <>
                <div className="alert alert-error" role="alert">
                    Error occured!
                </div>
            </>
        );
    }
}