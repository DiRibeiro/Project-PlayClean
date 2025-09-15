import * as React from 'react';

export default function FilterCheckboxItem({
  id,
  label,
  checked = false,
  onChange,
  className = '',
  labelClassName = '',
}) {
  const inputId = React.useMemo(() => `checkbox-${id ?? label}`, [id, label]);
  return (
    <li className={className}>
      <input
        id={inputId}
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange?.(e.target.checked)}
      />
      <label className={labelClassName} htmlFor={inputId}>
        {label}
      </label>
    </li>
  );
}
