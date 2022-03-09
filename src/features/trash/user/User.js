import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { login } from './userSlice'
import { Button } from 'react-bootstrap'
function User() {
    const value = useSelector((state) => state.user.value);
    const user = useSelector((state) => state.login.value)
    const dispatch = useDispatch();
    const [name_value, setName] = useState('');

    return (
        <div>
            <h1>{value.name} login</h1>
            < input onChange={function (e) { setName(e.target.value) }} />
            <button onClick={function () { dispatch(login({ name: 'kkc', age: 20, email: 'kkc' })) }}>login</button>
            <Button>btn</Button>
            {user.email}<br />
            {user.pwd}
        </div>)
}


export default User;