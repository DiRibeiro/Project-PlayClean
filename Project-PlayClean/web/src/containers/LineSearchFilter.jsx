import React from 'react'

export default props => (
    <li className={ props.liDropmenu ? "liDropmenu" : "" } >
        <input type="checkbox" id={ `checkbox${ props.id }` } value={ props.label } />
        <label className={ props.itemDropmenu ? "itemDropmenu" : "" } htmlFor={ `checkbox${ props.id }` }>{ props.label }</label>
    </li>
)