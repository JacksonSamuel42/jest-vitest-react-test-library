import "@testing-library/jest-dom"
import React from "react"
import userEvent from "@testing-library/user-event"
import { render } from "@testing-library/react"
import { describe, vi } from "vitest"
import { ButtonWrapper } from "./ButtonWrapper"

describe("Button Wrapper", () => {
    test('handles onClick', async() => {
        const user = userEvent.setup()
        const onClick = vi.fn()
        const screen = render(<ButtonWrapper onClick={onClick} title="Add Item"/>)
        const buttonElement = screen.getByText('Add Item')
        await user.click(buttonElement)
        expect(onClick).toHaveBeenCalledTimes(1)
    });
})