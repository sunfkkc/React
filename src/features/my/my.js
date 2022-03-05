import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementByAmount } from './mySlice'
import { useState } from 'react'
function My() {

    const count = useSelector((state) => state.myslicel.value)
    const dispatch = useDispatch()
    const [amount, setAmount] = useState(1)
    const amount_value = Number(amount)
    return (
        <>
            <div>
                {count}
                <button onClick={function () { dispatch(increment()) }}>+</button>
                <input type="number" value={amount} onChange={function (e) { setAmount(e.target.value) }} />
                {amount}
                <button onClick={function () { dispatch(incrementByAmount(amount_value)) }}>calculate</button>
            </div>
        </>
    )
}
export default My;
