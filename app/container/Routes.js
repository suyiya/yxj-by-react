/**
 * Created by SUYIYA on 16/8/9.
 */

'use strict';

import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import GoodsList from './GoodsList';
import Detail from './Detail';
import Buy from './Buy';

class App extends Component{
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}

class Test extends Component{
    render() {
        return (
            <div>
                test
            </div>
        )
    }
}

export default (
    <Router>
        <Route path="/" component={App}>
            <IndexRoute component={GoodsList} />
            <Route path="goodsList" component={GoodsList} />
            <Route path="detail" component={Detail} />
            <Route path="buy" component={Buy} />
            <Route path="test" component={Test} />
        </Route>
    </Router>
)