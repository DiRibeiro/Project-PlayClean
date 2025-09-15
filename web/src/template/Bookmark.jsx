import * as React from 'react';
import clsx from 'clsx';

export default function Bookmark({
  label,
  value = 0,
  month,
  icon = 'chart-bar',
  bg,        // ex.: "aqua" (usa "info-box bg-aqua")
  color,     // ex.: "bg-yellow-seccondary" (fallback se não tiver bg)
  className,
  progress = 100, // permite controlar a barra de progresso
}) {
  const boxClass = clsx('info-box', bg ? `bg-${bg}` : color, className);

  return (
    <div className="col-md-4 col-sm-6 col-xs-12">
      <div className={boxClass} aria-live="polite">
        <span className="info-box-icon" aria-hidden="true">
          <i className={`fa fa-${icon}`} />
        </span>

        <div className="info-box-content">
          <span className="info-box-text">{label}</span>
          <span className="info-box-number">{value}</span>

          <div className="progress" role="progressbar" aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100}>
            <div className="progress-bar" style={{ width: `${Math.min(Math.max(progress, 0), 100)}%` }} />
          </div>

          <span className="progress-description">
            Relatório referente a {month}
          </span>
        </div>
      </div>
    </div>
  );
}
