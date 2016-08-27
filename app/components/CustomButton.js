/**
 * Created by SUYIYA on 16/8/15.
 */

import React, { Component, PropTypes } from 'react';
import { Router } from 'react-router';

class CustomButton extends  Component {
    constructor() {
        super();
    }

    render() {
        return(
            <button className={this.props.className} onClick={this.props.onClick}>
                {this.props.children}
                {this.props.title}
            </button>
        );
    }
};

module.exports = CustomButton;