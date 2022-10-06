import React from 'react'
import { useCounterProps } from './useCounter.types'

export const useCounter = ({initialCount = 0}: useCounterProps = {}) => {
    const [count, setCount] = React.useState(initialCount)
    const increment = () => setCount(count + 1)
    const decrement = () => setCount(count - 1)
    return {count, increment, decrement}
}