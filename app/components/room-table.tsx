import moment, { Moment } from 'moment';
import RoomTableItem from './room-table-item';

/**
 * Factory to generate times for each day, does not need to exist in the database, but could as well.
 */
function TimeFactory(basedOnDate: string) {
    const output: {
        day1: {
            times: Moment[];
            date: Moment;
        };
        day2: {
            times: Moment[];
            date: Moment;
        };
        day3: {
            times: Moment[];
            date: Moment;
        };
    } = {
        day1: {
            times: [],
            date: moment(basedOnDate).add(-1, 'day')
        },
        day2: {
            times: [],
            date: moment(basedOnDate)
        },
        day3: {
            times: [],
            date: moment(basedOnDate).add(1, 'day')
        },
    };

    const wantedHours = [
        9,
        13
    ];

    wantedHours.forEach(hour => {
        output.day1.times.push(output.day1.date.clone().set({ hour, minute: 0, seconds: 0, millisecond: 0 }))
        output.day2.times.push(output.day2.date.clone().set({ hour, minute: 0, seconds: 0, millisecond: 0 }))
        output.day3.times.push(output.day3.date.clone().set({ hour, minute: 0, seconds: 0, millisecond: 0 }))
    });

    return output;
}

export default function RoomTable({ rooms, onTimeSlotSelect, selectedTimeSlot, filteredDate }: RoomTableProps) {
    let {day1, day2, day3} = TimeFactory(filteredDate);

    return (
        <div className="flex w-full h-full border border-zinc-400 rounded-xl max-h-72 overflow-scroll relative">

            {/* Day 1 */}
            <div className="flex-1 h-full">
                <div className='text-center border-r border-zinc-400 text-lg md:text-2xl border-b border-zinc-400 p-2'>{day1.date.format('D MMM')}</div>
                <div className='p-2 border-r border-zinc-400 overflow-scroll h-full'>
                    {rooms.map((room: Room) => (
                        <RoomTableItem key={room.id} room={room} day={day1} onTimeSlotSelect={onTimeSlotSelect} selectedTimeSlot={selectedTimeSlot} />
                    ))}
                </div>
            </div>

            {/* Day 2 */}
            <div className="flex-1 border-r border-zinc-400">
                <div className='text-center text-lg md:text-2xl border-b border-zinc-400 p-2'>{day2.date.format('D MMM')}</div>
                <div className='p-2'>
                    {rooms.map((room: Room) => (
                        <RoomTableItem key={room.id} room={room} day={day2} onTimeSlotSelect={onTimeSlotSelect} selectedTimeSlot={selectedTimeSlot} />
                    ))}
                </div>
            </div>

            {/* Day 3 */}
            <div className="flex-1">
                <div className='text-center text-lg md:text-2xl border-b border-zinc-400 p-2'>{day3.date.format('D MMM')}</div>
                <div className='p-2'>
                    {rooms.map((room: Room) => (
                        <RoomTableItem key={room.id} room={room} day={day3} onTimeSlotSelect={onTimeSlotSelect} selectedTimeSlot={selectedTimeSlot} />
                    ))}
                </div>
            </div>
        </div>
    )
}