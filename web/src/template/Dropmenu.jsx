import React from 'react'

export default props => (
    <>
        <a href={ props.ahref }>{ props.label }</a>
        <ul className="ulDropmenu" >
            { props.children }
        </ul>
    </>
)