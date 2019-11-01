import React from 'react'

export default props => {
    
    return (
        <>
            <button className='btnSidebar' onClick={ props.onClick }>
                <i className={ `fa fa-${ props.icon }` } style={{ marginRight: '10px' }} ></i>
                <span>{ props.label }</span>
                <span className='pull-right-container'>
                    <i className='fa fa-angle-left pull-right'></i>
                </span>
            </button>
            <ul className="treeview-menu" style={{ display: props.open ? 'block' : 'none' }}>
                { props.children }
            </ul>
        </>
    )
}