import React from 'react'

export default props => (
    <div className="user-panel">
        <div className="pull-left info">
            <p>{ props.name }</p>
            <i className="fa fa-user text-primary"></i> { props.type }
        </div>
        <div className="pull-left image">
            <img src={ props.img } className="img-circle" alt="Foto de perfil do usuário" />
        </div>
    </div>
)