import React, { Component } from 'react';

const Button = props => {

    return (
        <button onClick={props.handleFormOpen} className="button__outline" >
            +
        </button>
    )
}

export default Button;