import '@testing-library/jest-dom';
import React from 'react';
import {render} from '@testing-library/react';
import {describe, expect} from 'vitest';
import Great from '../components/great/Great';

describe("Greet", () => {
    test("Greet renders correctly", () => {
        const {getByText} = render(<Great/>)

        expect(getByText('Hello')).toBeInTheDocument()
    })

    test("Greet renders with a name", () => {
        const {getByText} = render(<Great name="Jackson"/>)
        
        expect(getByText("Hello Jackson")).toBeInTheDocument()
    })
})
