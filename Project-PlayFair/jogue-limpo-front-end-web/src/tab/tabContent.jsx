import React, { Component } from 'react'
import { connect } from 'react-redux'

import If from '../templates/if'

class TabContent extends Component {
    render(){
        const selected = this.props.tab.selected === this.props.id
        /* const visible = this.props.tab.visible[this.props.id] */
        return (
            <div id={ this.props.id }
                className={`tab-pane ${selected ? 'active' : ''}`}>     
                { this.props.children }
            </div>
        )
    }
}

const mapStateToProps = state => ({ tab: state.tab })
export default connect(mapStateToProps)(TabContent)