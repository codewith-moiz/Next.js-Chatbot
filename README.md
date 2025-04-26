# Next.js Chatbot

A modern chatbot application built with Next.js, featuring user authentication and a rich chat interface.

## Features

- User authentication with Next Auth
- Interactive chat interface
- Markdown support for messages
- Syntax highlighting for code snippets
- Responsive design with Tailwind CSS

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## Project Structure

- `src/app` - Next.js application routes and layouts
- `src/components` - Reusable UI components
  - `chat/` - Chat-specific components
  - `auth/` - Authentication components
  - `ui/` - General UI components
- `src/utils` - Utility functions and helpers

## Technologies Used

- [Next.js](https://nextjs.org/) - React framework
- [NextAuth.js](https://next-auth.js.org/) - Authentication
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [React Markdown](https://github.com/remarkjs/react-markdown) - Markdown rendering
- [React Syntax Highlighter](https://github.com/react-syntax-highlighter/react-syntax-highlighter) - Code syntax highlighting

## Deployment

The application can be deployed on [Vercel](https://vercel.com/), the platform from the creators of Next.js.

```bash
npm run build
# then
npm run start
```

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## License

MIT
