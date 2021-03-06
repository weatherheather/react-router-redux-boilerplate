import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import reducer from './reducers/reducer';
import { Provider } from 'react-redux';
import createLogger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux';
import App from './components/App.js';
import Home from './components/Home.js';
import Foo from './components/Foo.js';
import Bar from './components/Bar.js';

const loggerMiddleware = createLogger();

const store = createStore(
  combineReducers({
    reducer,
    routing: routerReducer,
  }),
  composeWithDevTools(
    applyMiddleware(loggerMiddleware, routerMiddleware(browserHistory))
    )
);

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Router history={history}>
        <Route path="/" component={App}>
          <IndexRoute component={Home} />
          <Route path="foo" component={Foo} />
          <Route path="bar" component={Bar} />
        </Route>
      </Router>
    </div>
  </Provider>,
  document.getElementById('app')
);
