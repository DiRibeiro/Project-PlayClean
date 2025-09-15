import * as React from 'react';

export default function MenuTree({ onClick, icon, label, open = false, children }) {
  const id = React.useId();
  return (
    <>
      <button
        className="btnSidebar"
        onClick={onClick}
        aria-expanded={open ? 'true' : 'false'}
        aria-controls={`treemenu-${id}`}
        type="button"
      >
        <i className={`fa fa-${icon}`} style={{ marginRight: 10 }} aria-hidden="true" />
        <span>{label}</span>
        <span className="pull-right-container">
          <i className={`fa fa-angle-${open ? 'down' : 'left'} pull-right`} aria-hidden="true" />
        </span>
      </button>

      <ul id={`treemenu-${id}`} className="treeview-menu" style={{ display: open ? 'block' : 'none' }}>
        {children}
      </ul>
    </>
  );
}
