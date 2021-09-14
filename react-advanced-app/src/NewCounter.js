import React, { useState } from 'react'

export default function NewCounter() {
    const [count, setCount] = useState(0)
    const [previousClicks, setPreviousClicks] = useState(0)
    const increase = () => {
        setCount(count + 1)
    }
    const handleChange = (event) => {
        setPreviousClicks(Number(event.target.value))
    }
    return (
        <div>
            <input type="text" value={previousClicks} onChange={handleChange} />
            <p>You clicked me {previousClicks + count} times</p>
            <button onClick={increase}>Klik</button>
        </div>
    )
}
