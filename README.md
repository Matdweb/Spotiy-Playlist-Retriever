# Spotify Playlist Retriever

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) that retrieves the playList or playLists of an authenticated user with the Spotify API

This is an experimental code. The purpose of this project is to test functionality for the development of a greater application
See here the main application: [Jamming](#);

Here you can take a look at the Figma prototype [Figma](https://www.figma.com/file/vC75e7Rda1IiLSC6SmKztR/Spotify-Playlists-Retriever-next_v12?type=design&node-id=0%3A1&mode=design&t=dveafw1P5ssLiuSS-1)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## More about this application's APIs management

This app works with [`Next Auth`](https://next-auth.js.org/) for user authentication
The app also has 2 API endpoints: [`getUserPlaylists`](https://github.com/Matdweb/Spotiy-Playlist-Retriever/pull/4) & [`createNewPlaylist`](https://github.com/Matdweb/Spotiy-Playlist-Retriever/pull/8) please check them out to understand the logic of this program. 
Those links provide a very complete explanation!

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
