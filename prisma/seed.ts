import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const initialRooms = [
  { name: 'Steve', spots: 6 },
  { name: 'Ada', spots: 10 },
  { name: 'Grace', spots: 20 },
  { name: 'Margret', spots: 4 },
  { name: 'Edmund', spots: 10 }
];

const seed = async () => {
  await prisma.booking.deleteMany();
  await prisma.room.deleteMany();

  for (const room of initialRooms) {
    await prisma.room.create({
      data: {
        name: room.name,
        spots: room.spots
      },
    });
  }
};

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
