"use client"
import { useState } from 'react'

function Count() {
    const [counter, setCounter] = useState(0);

    return (
        <div>
            //The counter is initialized at 0. The number will increase everytime the button is clicked
            <h3>The current number in the counter is: {counter}</h3>
            <button onClick={() => setCounter(counter+1)}>Add to counter</button>
        </div>
    )
}

export default Count;