import "@testing-library/jest-dom"
import { render } from "@testing-library/react"
import user from '@testing-library/user-event'
import React from 'react'
import Counter from "./Counter";

describe('Counter', () => {
    test('renders correctly', () => {
        const screen = render(<Counter/>)

        const countElement = screen.getByRole('heading')
        expect(countElement).toBeInTheDocument()

        const incrementButton = screen.getByRole('button', {name: 'Increment'})
        expect(incrementButton).toBeInTheDocument()
    });

    test('renders account of 0', () => {
        const screen = render(<Counter/>)

        const countElement = screen.getByRole('heading')
        expect(countElement).toHaveTextContent('0')
    });

    test('render a count of after clicking the increment button', async() => {
        user.setup()
        const screen = render(<Counter/>)

        const incrementButton = screen.getByRole('button', {name: 'Increment'})
        await user.click(incrementButton)

        const countElement = screen.getByRole('heading')
        expect(countElement).toHaveTextContent('1')
    });
    
    test('render a count of 2 after clicking to increment button', async() => {
        user.setup()
        const screen = render(<Counter/>)

        const incrementButton = screen.getByRole('button', {name: 'Increment'})
        await user.dblClick(incrementButton)

        const countElement = screen.getByRole('heading')
        expect(countElement).toHaveTextContent('2')
    });

    test('renders a count of after clicking the set button', async() => {
        user.setup()
        const screen = render(<Counter/>)

        const amountInput = screen.getByRole('spinbutton')
        await user.type(amountInput, '10')
        expect(amountInput).toHaveValue(10)

        const setButtonElement = screen.getByRole('button', {name: 'Set'})
        await user.click(setButtonElement)
        const countElement = screen.getByRole('heading')
        expect(countElement).toHaveTextContent('10')
    });

    test('elements are focused in the right order', async() => {
        user.setup()
        const screen = render(<Counter/>)

        const amountInput = screen.getByRole('spinbutton')
        const setButtonElement = screen.getByRole('button', {name: 'Set'})
        const incrementButton = screen.getByRole('button', {name: 'Increment'})
        
        await user.tab()
        expect(incrementButton).toHaveFocus()
        await user.tab()
        expect(amountInput).toHaveFocus()
        await user.tab()
        expect(setButtonElement).toHaveFocus()
    });
})