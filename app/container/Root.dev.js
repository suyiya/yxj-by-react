/**
 * Created by SUYIYA on 16/8/14.
 */

'use strict'

import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import routes from './Routes';
import DevTools from './DevTools';
import { Router, hashHistory } from 'react-router';

class Root extends Component {
    render() {
        const { store } = this.props
        return (
            <Provider store={store}>
                <div>
                    <Router routes={routes} history={hashHistory}/>
                    <DevTools />
                </div>
            </Provider>
        )
    }
}

Root.propTypes = {
    store: PropTypes.object.isRequired
}

module.exports = Root;