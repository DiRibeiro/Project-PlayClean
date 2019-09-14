import React from 'react'

export default props => (
    <header className="main-header">
        <a href="/" className="logo">
            <span className="logo-mini"><i className="fa fa-recycle"></i></span>
            <span className="logo-lg"><b>Jogue Limpo</b></span>
        </a>
        <nav className="navbar navbar-static-top" role="navigation">
            <a href="/" className="sidebar-toggle" data-toggle="push-menu" role="button">
                <span className="sr-only">Toggle navigation</span>
            </a>
        <a href="/#" className="logout">
            <button>Logout</button>
        </a>
        </nav>
    </header>
)