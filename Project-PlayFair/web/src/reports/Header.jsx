import React from 'react'
import { useDispatch } from 'react-redux'

import { logout } from '../actions/authActions'
export default () => {
    const dispatch = useDispatch()
    return(
    <header className="main-header">
        <a href="/#" className="logo">
            <span className="logo-mini">J<b>L</b>O</span>
            <span className="logo-lg">Jogue<b>Limpo</b></span>
        </a>
        <nav className="navbar navbar-static-top" role="navigation">
            <a href="/#" className="sidebar-toggle" data-toggle="push-menu" role="button">
                <span className="sr-only">Toggle navigation</span>
            </a>
            <div className="pull-right">
                <button className="btn btn-logout" onClick={ () => dispatch(logout()) }>Sair</button>
            </div>
        </nav>
    </header>)
}