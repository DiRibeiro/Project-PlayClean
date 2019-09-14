import React from 'react'

export default props => (
    <header className="main-header">
        <a href="/#/" className="logo">
            <span className="logo-mini"><b>J L O</b></span>
            <span className="logo-lg">
            <i className="fa fa-recycle"/>
                &nbsp;Jogue<b> Limpo</b>
            </span>
        </a>
        <nav className="navbar navbar-static-top" role="navigation">
            <a href="/" className="sidebar-toggle" data-toggle="push-menu" role="button">
                <span className="sr-only"></span>
            </a>
        <a href="/#" className="logout">
            <button>Logout</button>
        </a>
        </nav>
    </header>
)