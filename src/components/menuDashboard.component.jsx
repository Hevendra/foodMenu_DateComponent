import React, { useState } from 'react'
import DayCard from './shared/dayCard.component'
import { DAY_NAMES, MONTH_NAMES } from '../constants'
import './menuDashboard.style.css'

const WEEK_MENU = {
    Sunday: 'Stuffed Tandoori Paratha',
    Monday: 'Amritsari Kulcha with Choley',
    Tuesday: 'Tandoori Platter',
    Wednesday: 'Veg Briyani with Raita',
    Thursday: 'Masala Dosa',
    Friday: 'Chilli Paneer with Fried Rice',
    Saturday: 'Rajmah Chaval'
}

const MenuDashboard = () => {

    const date = new Date()
    const [selectedDay, setSelectedDay] = useState(DAY_NAMES[date.getDay()])
   
    const cardClickHandler = (day) => {
        setSelectedDay(day)
    }

    const showWeekDays = () => {
        const dateVal = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()
        const dateStr = `${dateVal} ${MONTH_NAMES[date.getMonth()]}`
        const today = date.getDay();
        const sortedDaysList = DAY_NAMES.slice(today).concat(DAY_NAMES.slice(0, today));
        return sortedDaysList.map(day => {
            return (
                <DayCard
                    key={day}
                    day={day}
                    date={dateStr}
                    isToday={day === DAY_NAMES[date.getDay()]}
                    isSelected={selectedDay === day}
                    onClick={cardClickHandler}
                />
            )
        })

    }

    return (
        <div className='container'>
            <div className='daysContainer'>
                {showWeekDays()}
            </div>
            <div className='detailContainer'>
                <div className='dayText'>{selectedDay}</div>
                <div className='detailText'>{WEEK_MENU[selectedDay]}</div>
            </div>
        </div>
    )
}
export default MenuDashboard