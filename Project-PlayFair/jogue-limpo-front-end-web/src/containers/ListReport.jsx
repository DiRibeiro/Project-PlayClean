import React, {Component} from 'react'
import axios from 'axios'

import RowReport from './RowReport'

class ListReport extends Component {
    constructor(props){
        super(props)

        this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
        this.handleMarkAsPending = this.handleMarkAsPending.bind(this)
    }

    handleMarkAsDone(ListReport){
        axios.put(`${URL}/${ListReport._id}`, { ...ListReport, done: true})
            .then(resp => this.refresh())
    }
    
    handleMarkAsPending(ListReport){
        axios.put(`${URL}/${ListReport._id}`, { ...ListReport, done: false})
            .then(resp => this.refresh())
    }

    render(){
        return(
            <div>
                <RowReport handleMarkAsDone={this.handleMarkAsDone} title="Lixos espalhados" dateInserted="11/12/2019" />
            </div>
        )
    }
}

export default ListReport