import React from 'react'

const DateFestival = ({date}) => {
    const months = [
        "Ene",
        "Feb",
        "Mar",
        "Abr",
        "May",
        "Jun",
        "Jul",
        "Ago",
        "Sep",
        "Oct",
        "Nov",
        "Dic"
      ];
      const arrayDate = date.split("-")
      const positionMonth = arrayDate[1]
      const dayTotal = arrayDate[2]
      const day = +dayTotal.slice(0,2)
      const year = arrayDate[0]
      const month = months[(+positionMonth)-1]

  return (
    <div className='flex flex-col bg-zinc-900 text-orange-200 min-w-16 p-2 border-2 border-orange-200 rounded-xl items-center'>
      <span className='text-xl'>{day}</span>
      <span>{month}</span>
      <span>{year}</span>
    </div>
  )
}

export default DateFestival
