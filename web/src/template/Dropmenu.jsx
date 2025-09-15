import * as React from 'react';

export default function Dropmenu({ href, label, children, open = false }) {
  return (
    <div className="dropdown">
      <a href={href} aria-expanded={open ? 'true' : 'false'}>{label}</a>
      <ul className="ulDropmenu" role="menu" style={{ display: open ? 'block' : 'none' }}>
        {children}
      </ul>
    </div>
  );
}
