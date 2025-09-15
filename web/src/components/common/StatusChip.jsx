import * as React from 'react';
import { Chip } from '@mui/material';

const MAP = {
  success: { color: 'success', variant: 'filled' },
  warning: { color: 'warning', variant: 'filled' },
  default: { color: 'default', variant: 'outlined' },
  info: { color: 'info', variant: 'filled' },
  error: { color: 'error', variant: 'filled' },
};

export default function StatusChip({ label, tone = 'default', ...rest }) {
  const cfg = MAP[tone] ?? MAP.default;
  return <Chip label={label} color={cfg.color} variant={cfg.variant} size="small" {...rest} />;
}
