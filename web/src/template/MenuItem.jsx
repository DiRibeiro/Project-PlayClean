import * as React from 'react';
import { NavLink } from 'react-router-dom';

export default function MenuItem({ path, icon, label }) {
  return (
    <li>
      <NavLink to={`/${path}`} className={({ isActive }) => (isActive ? 'active' : undefined)}>
        <i className={`fa fa-${icon}`} aria-hidden="true" />
        {' '}
        <span>{label}</span>
      </NavLink>
    </li>
  );
}
