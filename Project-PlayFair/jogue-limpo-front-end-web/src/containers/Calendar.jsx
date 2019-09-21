import React from 'react'
import Moment from 'moment'

export default class Calendar extends React.Component{
  constructor(props){ 
    super(props)
    this.width = props.width || '350px'
    this.style = props.style || {}
  }

  state = { 
    momentContext : Moment(),
    today : Moment(),
    showMonthPopup : false,
    showYearPopup : false
  }

  render(){
    return (
      <div className="calendar-container">
          Calendar
      </div>
    )
  }
}