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
    <div className="relative min-h-screen flex flex-col bg-zinc-200 flex-1 p-8">
      {/* Header*/}
      <div>
        <h1 className="text-5xl pt-16 pb-8">Välj en tid</h1>
        <div className="my-6">
          <Dropdown rooms={ rooms } onFilterRoomsSelect={handleFilterRoomsSelect} />
        </div>
      </div>

      {/* Body */}
      <div>
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
      <div className='mb-8 mt-4'>
        <button type="button" className="w-full bg-black text-white py-3 rounded-xl disabled:opacity-50"
          disabled={!selectedRoom}
          onClick={() => {router.push(`/book?roomId=${selectedRoom?.id}&date=${selectedDate}`)}}
        >
          Nästa
        </button>
      </div>
    </div>
  );
}
