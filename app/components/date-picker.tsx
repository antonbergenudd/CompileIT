'use client'

import moment from "moment";
import { SlArrowLeftCircle, SlArrowRightCircle  } from "react-icons/sl";

export default function DatePicker({ onFilterDateSelect, filteredDate }: DatePickerProps) {
  return (
    <div className="w-full flex justify-between h-1/5 items-end">
      <div className="w-full flex justify-between items-center pb-6">
        <button onClick={() => onFilterDateSelect(moment(filteredDate).add(-1 , 'days').toISOString())}><SlArrowLeftCircle size="20" /></button>
        <p className="mx-4 text-lg md:text-xl">{moment(filteredDate).add(-1 , 'days').format('D MMM')} - {moment(filteredDate).add(1 , 'days').format('D MMM')}</p>
        <button onClick={() => onFilterDateSelect(moment(filteredDate).add(1 , 'days').toISOString())}><SlArrowRightCircle size="20" /></button>
      </div>
    </div>
  )
}