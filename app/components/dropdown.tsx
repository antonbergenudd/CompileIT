'use client'

import { Checkbox, Field, Label, Menu, MenuButton, MenuItems } from '@headlessui/react';
import { CheckIcon } from '@heroicons/react/16/solid';
import { useState } from 'react';
import { SlArrowDown } from 'react-icons/sl';

export default function Dropdown({ rooms, onFilterRoomsSelect }: DropdownProps) {
  const [checkedRooms, setCheckedRooms] = useState<string[]>([]);

  const handleCheckboxChange = (roomId: string) => {
    setCheckedRooms((prevChecked) => {
      return prevChecked.includes(roomId)
        ? prevChecked.filter(id => id !== roomId)
        : [...prevChecked, roomId];
    });
  };

  const applyFilter = () => {
    onFilterRoomsSelect(checkedRooms.length == 0 ? rooms.map(room => room.id) : checkedRooms);
  }

  const clearSelection = () => {
    setCheckedRooms([]);
  };

  return (
    <Menu as="div" className="relative z-40">
      <MenuButton className="w-40 justify-between border border-zinc-300 inline-flex items-center rounded-xl p-2 px-3 text-md md:text-xl">
        {checkedRooms.length > 0 ? `${checkedRooms.length} valda rum` : 'Mötesrum'}
        <SlArrowDown />
      </MenuButton>

      <MenuItems as="div" className="absolute left-0 right-0 mt-2 py-8 w-auto border border-zinc-300 bg-zinc-200 drop-shadow-xl rounded-xl text-sm p-2 transition duration-100 ease-out">
        {rooms.map((room) => (
          <Field key={room.id} className="flex items-center gap-2 w-full justify-between py-1 px-4">
            <Label className="text-lg">{room.name} ({room.spots} personer)</Label>
            <Checkbox
              checked={checkedRooms.includes(room.id)}
              onChange={() => handleCheckboxChange(room.id)}
              className="group flex items-center size-5 rounded-sm border border-zinc-500 bg-zinc-200 ring-1 ring-white/15 ring-inset data-[checked]:bg-zinc-200"
            >
              <CheckIcon className="hidden fill-green-800 group-data-[checked]:block p-0" />
            </Checkbox>
          </Field>
        ))}

        <div className="full-w flex m-4 mt-8">
          <button className="flex-1 bg-black text-white py-3 text-lg rounded-xl mr-2" onClick={applyFilter}>
            Välj
          </button>
          <button className="flex-1 bg-black text-white py-3 text-lg rounded-xl disabled:opacity-50" onClick={clearSelection} disabled={checkedRooms.length === 0}>
            Avmarkera
          </button>
        </div>
      </MenuItems>
    </Menu>
  )
}
