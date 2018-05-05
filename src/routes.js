import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Map } from '@src/pages';
import MainLayout from '@components/layouts/MainLayout';
// import auth from '@helpers/auth';

const WithLayoutRoute = ({ component, ...rest }) => {
    const RouteComponent = component;
    
    return (
        <Route
            {...rest}
            render={matchProps => {
                return (
                    <MainLayout>
                        <RouteComponent {...matchProps} />
                    </MainLayout>
                );
            }}
        />
    );
};

WithLayoutRoute.propTypes = {
    component: PropTypes.any,
    authRequired: PropTypes.bool
};

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <WithLayoutRoute exact path="/map" component={Map} />
            </Switch>
        </BrowserRouter>
    );
};

export default Router;
