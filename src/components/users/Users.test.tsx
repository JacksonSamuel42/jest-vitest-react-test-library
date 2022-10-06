import "@testing-library/jest-dom"
import React from "react";
import { render } from "@testing-library/react";
import { Users } from "./Users";
import { server } from "../../mocks/server";
import { rest } from "msw";

describe('Users', () => {
    test('renders a list of users', async() => {
        const screen = render(<Users/>)
        const users = await screen.findAllByRole('listitem')

        expect(users).toHaveLength(3)
    });

    test('renders error ', async() => {
        server.use(
            rest.get('https://jsonplaceholder.typicode.com/users', (req, res, ctx) => {
                return res(
                    ctx.status(500)
                )
            })
        )

        const screen = render(<Users/>)
        const error = await screen.findByText('Error fetching users')
        expect(error).toBeInTheDocument()
    });
});
