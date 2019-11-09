import React from 'react'

const Calendar = props => {
    return(
        <div className="TodoForm">
            <button className="Toggler" /* onClick={toggleAll} */>Informe data e a descrição</button>
            <form /* onSubmit={handleSubmit} */>
                <input type="text" className="TodoFormTextBox" name="TodoFormTextBox" placeholder="What needs to be done?" required />
            </form>
        </div>
    )
}

export default Calendar