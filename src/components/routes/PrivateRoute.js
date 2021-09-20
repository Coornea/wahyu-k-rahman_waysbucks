import React from 'react'
import { Route, Redirect } from 'react-router-dom'

function PrivateRoute({component: Component, ...rest}) {
    const isLogin = JSON.parse(localStorage.getItem('login'))
    console.log(isLogin);

    return (
        <Route
            {...rest}
            render = {(props) => (isLogin ? <Component {...props} /> : <Redirect to='/' />
            )}
        />
    )
}

export default PrivateRoute
