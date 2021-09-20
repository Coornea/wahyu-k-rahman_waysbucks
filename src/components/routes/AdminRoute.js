import React from 'react'
import { Route, Redirect } from 'react-router-dom'

function AdminRoute({component: Component, ...rest}) {
    const isLogin = JSON.parse(localStorage.getItem('login'))
    console.log(isLogin);
    const dataLogin = JSON.parse(localStorage.getItem('dataLogin'))
    console.log(dataLogin);

    return (
        <Route
            {...rest}
            render = {(props) => {
                if (isLogin === true && dataLogin.status === 'Admin') {
                    return <Component {...props} />
                } else {
                    return <Redirect to='/' />
                }
            }}
        />
    )
}

export default AdminRoute
