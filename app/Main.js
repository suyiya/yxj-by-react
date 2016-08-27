import React from 'react';
import ReactDOM from 'react-dom';
import routes from './container/Routes';
import Root from './container/Root';
import configureStore from './store/configureStore';

import css from './css/index.less';

const store = configureStore({});

ReactDOM.render(<Root store={store}/>, document.getElementById('content'));