import { rest } from 'msw'

export const handlers = [
  rest.get('https://jsonplaceholder.typicode.com/users', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        { name: 'Bruce Wayne' },
        { name: 'Recce James' },
        { name: 'Sandra Bullock' },
      ])
    )
  }),
]
