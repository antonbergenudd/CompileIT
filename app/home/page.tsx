import { prisma } from '@/app/lib/prisma';
import HomeClient from './client';

export default async function Page() {
  const rooms = await prisma.room.findMany({
    include: {
      bookings: true
    },
  });

  return <HomeClient rooms={ rooms } />;
}