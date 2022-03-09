/*import React, { useState } from 'react'
import { Form, Container, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { setEmail, setPwd } from '../features/trash/login/loginSlice'
import axios from 'axios'
function Login() {
    const user = useSelector((state) => state.login.value)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [email, setemail] = useState('')
    const [pwd, setpwd] = useState('')

    const onSubmit = function (e) {
        e.preventDefault()
        dispatch(setEmail(email))
        dispatch(setPwd(pwd))
        navigate('/')
        console.log(user)
        axios.post('api/users/login', user)
    }

    return (
        <>
            <Container>
                <Form>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="text" placeholder="Enter email" onChange={function (e) { setemail(e.target.value) }} />
                        {email}
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={function (e) { setpwd(e.target.value) }} />
                        {pwd}
                    </Form.Group>
                    <Button type='submit' onClick={function () {
                        dispatch(setEmail(email))
                        dispatch(setPwd(pwd))
                        navigate('/')
                        axios.post('api/users/login', { email: email, pwd: pwd })
                    }}>Submit</Button>
                </Form>
            </Container>
        </>
    )
}

export default Login*/