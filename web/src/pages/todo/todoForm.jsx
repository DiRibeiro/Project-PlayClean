import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add, changeTitle, changeFile, changeDescription, search, clear, changeDate } from '../../actions/calendarActions';
import { Box, Button, Card, CardContent, CardHeader, Grid, TextField } from '@mui/material';

export default function TodoForm() {
  const dispatch = useDispatch();
  const { title, description, date, file } = useSelector((s) => ({
    title: s.todo.title,
    description: s.todo.description,
    date: s.todo.date,
    file: s.todo.file,
  }));

  React.useEffect(() => { dispatch(search()); }, [dispatch]);

  return (
    <Card>
      <CardHeader title="Adicione um evento" />
      <CardContent>
        <Grid container spacing={2} alignItems="flex-start">
          <Grid item xs={12} md={6}>
            <TextField
              id="title"
              label="Título do Evento"
              fullWidth
              value={title || ''}
              onChange={(e) => dispatch(changeTitle(e))}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              id="dateOcurr"
              label="Data do evento"
              type="date"
              fullWidth
              value={date || ''}
              onChange={(e) => dispatch(changeDate(e))}
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="description"
              label="Descrição"
              fullWidth
              multiline
              minRows={4}
              value={description || ''}
              onChange={(e) => dispatch(changeDescription(e))}
            />
          </Grid>
          <Grid item xs={12}>
            <input
              id="select-document"
              className="input-select"
              type="file"
              accept="image/*"
              onChange={(e) => dispatch(changeFile(e))}
            />
          </Grid>
        </Grid>
        <Box sx={{ display: 'flex', gap: 1, mt: 2 }}>
          <Button
            variant="contained"
            color="success"
            onClick={() => add(title, description, date, file)(dispatch)}
          >
            Adicionar
          </Button>
          <Button variant="outlined" color="inherit" onClick={() => dispatch(clear())}>
            Limpar
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}
