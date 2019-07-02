import React, { Component } from 'react';
import { Switch, Route, HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux'
import { createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { LocaleProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import routers from './router';
import appReducer from './store/reducer'
const store = createStore(appReducer, composeWithDevTools(
    applyMiddleware(thunk)
))

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <LocaleProvider locale={zhCN}>
                        <Switch>
                            {
                                routers.map((route, index) => (
                                    <Route
                                        key={index}
                                        path={route.path}
                                        exact={route.exact}
                                        component={route.render}
                                    />
                                ))
                            }

                        </Switch>
                    </LocaleProvider>
                </Router>
            </Provider>
        );
    }
}

export default App;