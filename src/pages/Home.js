import React from 'react'
import '../static/Home.css'
import logo from '../static/img/giphy.gif'

function Home() {
    return (
        <>
            <div className='title'>
                <h1 >Welcome To Sunfkkc</h1>
                <img src={logo} alt='gif' />
            </div>
        </>
    )
}

export default Home