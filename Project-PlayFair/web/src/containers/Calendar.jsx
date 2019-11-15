import React from 'react'

const Calendar = () => {
    return(
        <div className='calendar-container'>
            <h1 className='calendar-h1'>Calendário de eventos<i class="fa fa-plus" aria-hidden="true"/></h1>
            <input className='calendar-input' type='text' placeholder='Adicione um novo evento'/>
            <input className='calendar-input' type='date' />
            <ul className='calendarUl'>
                <li className='calendarLi'>
                    <span className='span'>
                        <i className="fa fa-trash"></i>                   
                    </span> Jogue Limpo com Osório - Largo dos estudantes
                </li>
                <li className='calendarLi'>
                    <span className='span'>
                        <i className="fa fa-trash"></i>
                    </span> Jogue Limpo com Osório - Praça das Carretas
                </li>
                <li className='calendarLi'>
                    <span className='span'>
                        <i className="fa fa-trash"></i>
                    </span> Jogue Limpo com Osório - Praça da Matriz
                </li>
            </ul>
        </div>
    )
}

export default Calendar