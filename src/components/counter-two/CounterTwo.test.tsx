import "@testing-library/jest-dom"
import React from "react"
import userEvent from '@testing-library/user-event'
import { render } from "@testing-library/react"
import CounterTwo from "./CounterTwo"
import { describe, vi } from "vitest";

describe('Counter Two', () => {
    test('renders correctly', () => {
        const screen = render(<CounterTwo count={0}/>)
        const textElement = screen.getByText('Counter Two')
        expect(textElement).toBeInTheDocument()
    });

    test('handlers are called', async() => {
        const user = userEvent.setup()
        const incrementHandler = vi.fn()
        const decrementHandler = vi.fn()

        const screen = render(<CounterTwo count={0}
            HandleIncrement={incrementHandler}
            HandleDecrement={decrementHandler}
        />)

        const incrementButton = screen.getByRole('button', {name: /increment/i})
        const decrementButton = screen.getByRole('button', {name: /decrement/i})
        await user.click(incrementButton)
        await user.click(decrementButton)

        expect(incrementHandler).toHaveBeenCalledTimes(1)
        expect(decrementHandler).toHaveBeenCalledTimes(1)
    });
});