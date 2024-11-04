import { prisma } from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { roomId, bookedBy, date, id } = await req.json();

  try {
    const createdBooking = await prisma.booking.create({
      data: {        
        roomId,
        bookedBy,
        date,
        id
      },
    });
    return NextResponse.json(createdBooking);
  } catch (error) {
    return NextResponse.json({ error: `Failed to create booking` }, { status: 500 });
  }
}
