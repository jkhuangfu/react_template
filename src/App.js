import React, { Component } from 'react';
import { Switch, Route, HashRouter as Router } from 'react-router-dom';
import { LocaleProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import routers from './router';

class App extends Component {
    render() {
        return (
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
        );
    }
}

export default App;