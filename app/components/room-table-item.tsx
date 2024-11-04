
import clsx from 'clsx';
import moment from 'moment';

export default function RoomTableItem({ room, day, onTimeSlotSelect, selectedTimeSlot }: RoomTableItemProps) {
    const filteredTimes = day.times.filter((time: moment.MomentInput) => !room.bookings.some(booking => moment(booking.date).isSame(time, 'minute')));

    return (
        filteredTimes.map((time: any) => {
            return <div
                key={(room.id + time.unix())} 
                onClick={() => {
                    onTimeSlotSelect(room, time.toISOString())
                }} 
                className={clsx(
                    'rounded-md border border-green-700 p-2 my-2 text-xs',
                    {
                        'bg-green-900': selectedTimeSlot == (time.toISOString() + room.id),
                        'text-white': selectedTimeSlot == (time.toISOString() + room.id),
                    }
                )}
            >
                <p className='md:text-md'>{room.name} ({room.spots})</p>
                <p>{time.format('HH:mm')}-{time.clone().add(1, 'hours').format('HH:mm')}</p>
            </div>
        })
    )
}