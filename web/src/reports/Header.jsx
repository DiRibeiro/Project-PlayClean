import * as React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../actions/authActions';

export default function Header() {
  const dispatch = useDispatch();
  const [sidebarCollapsed, setSidebarCollapsed] = React.useState(
    () => document.body.classList.contains('sidebar-collapse')
  );

  const toggleSidebar = React.useCallback(() => {
    document.body.classList.toggle('sidebar-collapse');
    setSidebarCollapsed(document.body.classList.contains('sidebar-collapse'));
  }, []);

  return (
    <header className="main-header">
      <Link to="/" className="logo">
        <span className="logo-mini">J<b>L</b>O</span>
        <span className="logo-lg">Jogue<b>Limpo</b></span>
      </Link>
      <nav className="navbar navbar-static-top" role="navigation">
        <button
          type="button"
          className="sidebar-toggle"
          onClick={toggleSidebar}
          aria-label="Alternar navegação"
          aria-expanded={!sidebarCollapsed}
        >
          <span className="sr-only">Toggle navigation</span>
          <i className="fa fa-bars" aria-hidden="true" />
        </button>
        <div className="pull-right">
          <button className="btn btn-logout" onClick={() => dispatch(logout())}>Sair</button>
        </div>
      </nav>
    </header>
  );
}
