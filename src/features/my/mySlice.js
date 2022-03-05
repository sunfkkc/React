import { createSlice } from '@reduxjs/toolkit'

export const mySlice = createSlice({
    name: 'my',
    initialState: {
        value: 0,
    },
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: function (state) {
            state.value -= 1
        },
        incrementByAmount: function (state, action) {
            state.value += action.payload
        },
    },
})

export const { increment, decrement, incrementByAmount } = mySlice.actions

export default mySlice.reducer