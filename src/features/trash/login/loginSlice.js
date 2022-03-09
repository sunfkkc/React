import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
export const login = createSlice({
    name: 'user',
    initialState: {
        value: {
            email: '',
            pwd: '',
        }
    },
    reducers: {
        setEmail: function (state, action) {
            state.value.email = action.payload
        },
        setPwd: function (state, action) {
            state.value.pwd = action.payload
        },
    }
})

export const { setEmail, setPwd } = login.actions

export default login.reducer