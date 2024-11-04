/**
 * Data model props
 */

interface Booking {
    id: string;
    roomId: string;
    bookedBy: string;
    date: Date;
}

interface Room {
    id: string;
    name: string;
    spots: number;

    bookings: Booking[];
}

/**
 * Component props
 */
interface RoomTableProps {
    rooms: Room[];

    selectedTimeSlot: string;

    filteredDate: string;

    onTimeSlotSelect: (room: Room, date: string) => void;
}

interface RoomTableItemProps {
    room: Room;
    day: any;
    selectedTimeSlot: string;

    onTimeSlotSelect: (room: Room, date: string) => void;
}

interface HomeClientProps {
    rooms: Room[];
}

interface DatePickerProps {
    filteredDate: string;

    onFilterDateSelect: (date: string) => void;
}

interface DropdownProps {
    rooms: Room[];

    onFilterRoomsSelect: (roomIds: string[]) => void;
}