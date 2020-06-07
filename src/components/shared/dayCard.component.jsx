import React from 'react'
import './dayCard.style.css'
const TODAY = 'Today'

const DayCard = ({ day, date, isToday, isSelected, onClick }) => (
    <div className='card'>
        <div className={`dayCard ${isSelected ? 'selectedContainer' : ''}`} onClick={e => onClick(day)}>
            {isToday && <div className='todayText'>{TODAY}</div>}
            <div className={`dayTxt ${isSelected ? 'selectedText' : ''}`}>{day}</div>
            <div className={`dateTxt ${isSelected ? 'selectedText' : ''}`}>{date}</div>
        </div>
    </div>
)
export default DayCard;