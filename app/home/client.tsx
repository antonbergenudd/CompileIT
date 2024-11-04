'use client'

import Dropdown from '../components/dropdown';
import RoomTable from '../components/room-table';
import DatePicker from '../components/date-picker';
import { useRouter } from 'next/navigation'
import { useState } from 'react';
import moment from 'moment';

export default function HomeClient({ rooms }: HomeClientProps) {
  const router = useRouter()
  
  const [selectedRoom, setSelectedRoom] = useState<Room | null>();
  const [selectedDate, setSelectedDate] = useState<string>();
  const [filteredDate, setFilteredDate] = useState<string>(moment().toISOString());
  const [filteredRooms, setFilteredRooms] = useState<Room[]>(rooms);

  const handleSelectedTimeSlotChange = (room: Room, date: string) => {
    setSelectedRoom(selectedRoom !== room ? room : null);
    setSelectedDate(date);
  };

  const handleFilteredDateChange = (date: string) => {
    setFilteredDate(date);
  }

  const handleFilterRoomsSelect = (roomIds: string[]) => {
    setFilteredRooms(rooms.filter(room => roomIds.includes(room.id)));
  }

  return (
    <>
    <div className="relative h-screen flex flex-col bg-zinc-200 p-8">
      {/* Header*/}
      <div className='min-h-1/6 h-2/6 flex justify-between flex-col'>
        <h1 className="text-4xl mt-12">Välj en tid</h1>

        <Dropdown rooms={ rooms } onFilterRoomsSelect={handleFilterRoomsSelect} />
      </div>

      {/* Body */}
      <div className='min-h-4/6 h-4/6 relative'>
        <DatePicker 
          onFilterDateSelect={handleFilteredDateChange}
          filteredDate={filteredDate}
        />
        
        <RoomTable 
          rooms={ filteredRooms } 
          onTimeSlotSelect={handleSelectedTimeSlotChange} 
          selectedTimeSlot={ (selectedDate ?? "") + (selectedRoom?.id ?? "") } 
          filteredDate={filteredDate} 
        />
      </div>

      {/* Footer */}
      <div className='flex items-center pt-6'>
        <button className="w-full bg-black text-white py-2 rounded-xl disabled:opacity-50" 
          onClick={() => {router.push(`/book?roomId=${selectedRoom?.id}&date=${selectedDate}`)}}
          disabled={!selectedRoom}
        >
        Nästa
        </button>
      </div>
    </div>
    </>
  );
}
