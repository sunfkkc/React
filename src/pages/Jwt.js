import React from 'react'
import { Button } from 'react-bootstrap'
import '../static/Jwt.css'
import { Link } from 'react-router-dom'
function Jwt() {
    return (
        <>
            <h1>What's For?</h1>
            <div className='jwt'>

                <div className='btn subtn'>

                    <Link to='/register'><Button>Sign Up</Button></Link>

                </div>
                <div className='btn sibtn'>
                    <Link to='/login'><Button>Sign In</Button></Link>
                </div>
            </div>
        </>
    )
}

export default Jwt