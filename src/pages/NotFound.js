import React from 'react'
import notFound from '../assets/404-error.svg'
function NotFound() {
    return (
        <div>
            <img src={notFound} alt='Not Found' style={{width:'100%'}}/>
            <a href="https://www.vecteezy.com/free-vector/404">404 Vectors by Vecteezy</a>
        </div>
    )
}

export default NotFound;
