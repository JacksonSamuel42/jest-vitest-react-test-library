import React from 'react'
import { CounterTwoProps } from './CounterTwo.types'

const CounterTwo = (props: CounterTwoProps) => {
  return (
    <div>
        <h1>Counter Two</h1>
        <p>{props.count}</p>
        {props.HandleIncrement && (
            <button onClick={props.HandleIncrement}>Increment</button>
        )}
        {props.HandleDecrement && (
            <button onClick={props.HandleDecrement}>Decrement</button>
        )}
    </div>
  )
}

export default CounterTwo