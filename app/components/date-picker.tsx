'use client'

import moment from "moment";
import { SlArrowLeftCircle, SlArrowRightCircle  } from "react-icons/sl";

export default function DatePicker({ onFilterDateSelect, filteredDate }: DatePickerProps) {
  return (
    <div className="w-full flex justify-between my-4">
      <button onClick={() => onFilterDateSelect(moment(filteredDate).add(-1 , 'days').toISOString())}><SlArrowLeftCircle size="30" /></button>
      <p className="mx-4 text-lg md:text-xl">{moment(filteredDate).add(-1 , 'days').format('D MMM')} - {moment(filteredDate).add(1 , 'days').format('D MMM')}</p>
      <button onClick={() => onFilterDateSelect(moment(filteredDate).add(1 , 'days').toISOString())}><SlArrowRightCircle size="30" /></button>
    </div>
  )
}