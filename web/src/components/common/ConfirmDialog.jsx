import * as React from 'react';
import { Dialog, DialogTitle, DialogActions, Button } from '@mui/material';

export default function ConfirmDialog({ open, title, onClose, onConfirm, confirmText = 'Confirmar', cancelText = 'Cancelar' }) {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogTitle>{title}</DialogTitle>
      <DialogActions sx={{ p: 2, gap: 1 }}>
        <Button variant="outlined" color="inherit" onClick={onClose}>{cancelText}</Button>
        <Button variant="contained" color="success" onClick={onConfirm}>{confirmText}</Button>
      </DialogActions>
    </Dialog>
  );
}
