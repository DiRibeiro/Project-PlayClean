import * as React from 'react';
import clsx from 'clsx';

export default function Button({
  label,
  loading = false,
  type = 'submit',
  variant = 'success', // 'success' | 'danger' | 'neutral'
  className = '',
  disabled,
  children,
  ...rest
}) {
  const base = 'btn btnLogin';
  const map = {
    success: 'btn-success',
    danger: 'btn-danger',
    neutral: 'btn-default',
  };
  return (
    <button
      type={type}
      className={clsx(base, map[variant] || map.success, className)}
      disabled={loading || disabled}
      aria-busy={loading ? 'true' : undefined}
      {...rest}
    >
      {loading && (
        <i
          className="fas fa-circle-notch fa-spin"
          style={{ marginRight: 8 }}
          aria-hidden="true"
        />
      )}
      {children ?? label}
    </button>
  );
}
