import "@testing-library/jest-dom"
import React from 'react'
import {render, logRoles} from "@testing-library/react"
import { describe, expect } from "vitest"
import Skills from "./Skills"

describe('Skills', () => {
    const skills = ["Html", "Css", "Javascript"]
    test('renders correctly ', () => {
        const screen = render(<Skills skills={skills}/>)

        const listElement = screen.getByRole('list')
        expect(listElement).toBeInTheDocument()
    });

    test('renders a list of skills', () => {
        const screen = render(<Skills skills={skills}/>)

        const listItemsElements = screen.getAllByRole('listitem')
        expect(listItemsElements).toHaveLength(skills.length)
    });
    
    test('renders login button', () => {
        const screen = render(<Skills skills={skills}/>)

        const loginButton = screen.getByRole('button', {name: 'Login'})
        expect(loginButton).toBeInTheDocument()
    });

    test('Start learning button is not render ', () => { 
        const screen = render(<Skills skills={skills}/>)
        
        const startLearningButton = screen.queryByRole('button', {name: 'Start Learning'}) 
        expect(startLearningButton).not.toBeInTheDocument()
    })

    // test('Start Learning button is eventually display', async () => {
    //     const screen = render(<Skills skills={skills}/>)
        
    //     const startLearningButton = screen.findByRole('button', {name: 'Start Learning'}, {timeout: 2000}) 
    //     expect(startLearningButton).toBeInTheDocument()
    // });
})

