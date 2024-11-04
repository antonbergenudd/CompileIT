## Getting Started

1. First, run npm install
2. Then run npx prisma generate to generate the prisma client
3. Run npx prisma db push to update the sqllite database with the prisma schemas
4. Run npm run prisma-seed to populate the database (OBS. You might have to delete dev.db inside prisma to retrieve fresh data)
5. Run npm run dev to launch the application
6. Enjoy!!

First, run the development server:

```bash
npm run dev

npx kill-port 3000 (if not closed automatically, kill node process with this)
npx prisma generate (updates the prisma client, always run after changes to schema)
npx prisma db push (synchronize the prisma schema with the database)
npm run prisma-seed (seeds db with new data from seed file, custom command)

```

Assumptions
* Only display available rooms
* No possibility to remove a booking on a room
* If no room is selected in the filter, show all rooms
* No back buttons for navigation
* The name used for booking is not visually display anywhere (this can be inspected in the database using npx prisma studio)