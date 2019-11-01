import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router'

import { logout } from '../actions/authActions'

export default () => {

    const dispatch = useDispatch()
    const user = useSelector(state => state.user.personalInfo)

    return (
        <div className="navbar-custom-menu">
            <ul className="nav navbar-nav">
                <li className="dropdown user user-menu">
                    <a href={{ javascript:void(0) }} className="dropdown-toggle" data-toggle="dropdown">
                        <img src={ user.img } className="user-image" alt={`Imagem de ${ user.firstName }`} />
                        <span className="hidden-xs">{ user.firstName }</span>
                    </a>
                    <ul className="dropdown-menu">
                        <li className="user-header">
                            <img src={ user.img } className="img-circle" alt={`Imagem de ${ user.firstName }`} />
                            <p>{ user.firstName } { user.lastName }
                        <small>{ user.type }</small>
                            </p>
                        </li>
                        <li className="user-footer">
                            <div className="pull-left">
                                <Link to="perfil">
                                    <button className="btn btn-default btn-flat">Perfil</button>
                                </Link>
                            </div>
                            <div className="pull-right">
                                <button className="btn btn-default btn-flat" onClick={ () => dispatch(logout()) }>Sair</button>
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}