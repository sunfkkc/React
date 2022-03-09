import React, { useState, useEffect } from 'react'
import { FaUser } from 'react-icons/fa'
import { toast } from 'react-toastify'
function Register() {


    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        password2: '',
    })
    const { name, email, password, password2 } = FormData

    const onSubmit = function (e) {
        e.preventDefault();
        toast.error('asdf')
        if (password !== password2) {
            toast.error('password do not match')
        }
    }
    return (
        <><section className='heading'>
            <h1>
                <FaUser /> Register
            </h1>
            <p>
                Please create an account
            </p>
        </section>

            <section className='form' >
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <input type="text" className="form-control" id='name' name='name' value={user.name} placeholder="Enter your name" onChange={function (e) { setUser({ name: e.target.value }) }} />
                    </div>
                    <div className="form-group">
                        <input type="email" className="form-control" id='email' name='email' value={user.email} placeholder="Enter your email" onChange={function (e) { setUser({ email: e.target.value }) }} />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" id='password' name='password' value={user.password} placeholder="Enter your password" onChange={function (e) { setUser({ password: e.target.value }) }} />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" id='password2' name='password2' value={user.password2} placeholder="Confirm your password" onChange={function (e) { setUser({ password2: e.target.value }) }} />
                    </div>
                    <div className="form-group">
                        <button type='submit' className='btn ' >Submit</button>
                    </div>
                </form>
            </section>
        </>
    )
}

export default Register