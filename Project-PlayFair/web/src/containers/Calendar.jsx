import React, {Component} from 'react'

class Calendar extends Component {
    constructor(props){
        super(props)
        
        this.state = { description: '', list: [] }
        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        
    }

    handleChange = (e) => {
        this.setState({ ...this.state, description: e.target.value })
    }

    handleAdd = () => {
        console.log(this.state.description, this.state.date)
    }

    render() {
        return(
            <div className='calendar-container'>
                <h1 className='calendar-h1'>Calendário de eventos</h1>
                <div className='calendar-input'>
                    <input 
                        className='form-control' 
                        type='text' 
                        placeholder='Adicione um novo evento' 
                        onChange={ this.handleChange }
                        description={ this.state.description }/>
                    <input 
                        className='form-control' 
                        type='date' />
                    <button className='btn-calendar' onClick={ this.handleAdd } ><i className="fa fa-plus" aria-hidden="true"/></button>
                </div>
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
}

export default Calendar