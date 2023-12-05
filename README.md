# Functional fullstack project using Next.js 13, React, Typescript, Socket.io, Prisma, Tailwind, MySQL

## Features

- Real-time messaging using [Socket.io](https://livekit.io/)
- Send attachments as messages using [UploadThing](https://uploadthing.com/)
- Delete & Edit messages in real time for all users
- Create Text, Audio and Video call Channels utilizing [livekit.io](https://livekit.io/)
- 1:1 conversation between members
- 1:1 video calls between members
- Member management (Kick, Role change Guest / Moderator)
- Unique invite link generation & full working invite system
- Infinite loading for messages in batches of 10 (tanstack/query)
- Server creation and customization
- Beautiful UI using TailwindCSS and [shadcn/ui](https://ui.shadcn.com/)
- Full responsivity and mobile UI
- Light / Dark mode
- Websocket fallback: Polling with alerts
- ORM using [Prisma](https://www.prisma.io/)
- MySQL database using [Planetscale](https://planetscale.com/)
- Authentication with [Clerk](https://clerk.com/)

## Getting Started

### Cloning the repository

```shell
git clone git@github.com:Fufuos/Discord-Clone.git
```

### Install packages

```shell
npm i
```

### Setup .env file

```js
// Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

// Defaults
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

// MySql
DATABASE_URL=

//UploadThing
UPLOADTHING_SECRET=
UPLOADTHING_APP_ID=

// LiveKit
LIVEKIT_API_KEY=
LIVEKIT_API_SECRET=
NEXT_PUBLIC_LIVEKIT_URL=
```

### Setup Prisma

Add a MySQL Database
```shell
npx prisma generate
npx prisma db push
```

### Finally, run the development server

```shell
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deploy

I used [railway.app](https://railway.app/), as it had a free trial and has the ability to link to my github repository
