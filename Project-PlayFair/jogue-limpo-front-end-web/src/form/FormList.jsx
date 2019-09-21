import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getList } from '../actions/formActions'

class FormList extends Component {

    componentWillMount(){
        this.props.getList()
    }

    renderRows(){
        const list = this.props.list || []
        return list.map(fr => ( //fr = FormReport
            <tr key={fr._id}>
                <td>{fr.name}</td>
                <td>{fr.typeReport}</td>
                <td>{fr.date}</td>
            </tr>
        ))
    }

    render(){
        return (
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Nome do denúnciante</th>
                            <th>Tipo de denúncia</th>
                            <th>Data da criação</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </table>
            </div>
        )
    }
}
const mapStateToProps = state => ({list: state.formList.list})
const mapDispatchToProps = dispatch => bindActionCreators({getList}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(FormList)