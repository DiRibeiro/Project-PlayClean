import * as React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button, Stack } from '@mui/material';

export default function EditTextAreasDialog({
  open, title = 'Editar', labels = [], values = [], onChange, onClose, onSave,
}) {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent dividers>
        <Stack spacing={2} sx={{ mt: 1 }}>
          {labels.map((label, i) => (
            <TextField
              key={label}
              label={label}
              multiline
              minRows={4}
              value={values[i] ?? ''}
              onChange={(e) => onChange(i, e.target.value)}
              fullWidth
            />
          ))}
        </Stack>
      </DialogContent>
      <DialogActions sx={{ p: 2 }}>
        <Button onClick={onClose} color="inherit" variant="outlined">Cancelar</Button>
        <Button onClick={onSave} color="primary" variant="contained">Atualizar</Button>
      </DialogActions>
    </Dialog>
  );
}
