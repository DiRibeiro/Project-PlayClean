import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { remove, search, editTodo } from '../../actions/calendarActions';
import { fullDate, shortDateHTML } from '../../helper/date';
import BASE_URL from '../../config/consts';
import { Card, CardContent, CardHeader, IconButton, Table, TableBody, TableCell, TableHead, TableRow, Tooltip, TextField, Dialog, DialogActions, DialogContent, DialogTitle, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export default function TodoList() {
  const dispatch = useDispatch();
  const list = useSelector((s) => s.todo.list);

  const [confirm, setConfirm] = React.useState({ open: false, idx: -1 });
  const [edit, setEdit] = React.useState({ open: false, idx: -1, title: '', description: '', date: '', image: '' });

  React.useEffect(() => { dispatch(search()); }, [dispatch]);

  const openDelete = (idx) => setConfirm({ open: true, idx });
  const closeDelete = () => setConfirm({ open: false, idx: -1 });
  const doDelete = () => {
    const c = list[confirm.idx];
    if (c?._id) dispatch(remove(c._id));
    closeDelete();
  };

  const openEdit = (idx) => {
    const c = list[idx];
    setEdit({
      open: true,
      idx,
      title: c?.title ?? '',
      description: c?.description ?? '',
      date: shortDateHTML(c?.dateOcurr),
      image: c?.image ?? '',
    });
  };
  const closeEdit = () => setEdit((s) => ({ ...s, open: false }));
  const saveEdit = () => {
    const c = list[edit.idx];
    if (c?._id) dispatch(editTodo(c._id, edit.title, edit.description, edit.date, edit.image));
    closeEdit();
  };

  return (
    <Card sx={{ mt: 2 }}>
      <CardHeader title="Eventos" />
      <CardContent>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Título</TableCell>
              <TableCell>Descrição</TableCell>
              <TableCell>Data</TableCell>
              <TableCell>Arquivo</TableCell>
              <TableCell align="right">Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {list.map((item, idx) => (
              <TableRow key={item._id ?? idx}>
                <TableCell>{item.title}</TableCell>
                <TableCell sx={{ maxWidth: 480 }}>{item.description}</TableCell>
                <TableCell>{fullDate(item.dateOcurr)}</TableCell>
                <TableCell>
                  <a href={`${BASE_URL}/${item.image}`} target="_blank" rel="noopener noreferrer">Abrir</a>
                </TableCell>
                <TableCell align="right">
                  <Tooltip title="Excluir">
                    <IconButton color="error" onClick={() => openDelete(idx)}><DeleteIcon /></IconButton>
                  </Tooltip>
                  <Tooltip title="Editar">
                    <IconButton color="primary" onClick={() => openEdit(idx)}><EditIcon /></IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>

      {/* Confirm Delete */}
      <Dialog open={confirm.open} onClose={closeDelete} maxWidth="xs" fullWidth>
        <DialogTitle>
          {confirm.idx >= 0 ? `Deseja apagar este evento (${list[confirm.idx]?.title})?` : 'Confirmar exclusão'}
        </DialogTitle>
        <DialogActions sx={{ p: 2 }}>
          <Button variant="outlined" color="inherit" onClick={closeDelete}>Não</Button>
          <Button variant="contained" color="error" onClick={doDelete}>Sim</Button>
        </DialogActions>
      </Dialog>

      {/* Edit */}
      <Dialog open={edit.open} onClose={closeEdit} maxWidth="md" fullWidth>
        <DialogTitle>Editar evento</DialogTitle>
        <DialogContent dividers>
          <TextField label="Título" fullWidth sx={{ mt: 1 }} value={edit.title} onChange={(e) => setEdit((s) => ({ ...s, title: e.target.value }))} />
          <TextField label="Data" type="date" fullWidth sx={{ mt: 2 }} value={edit.date} onChange={(e) => setEdit((s) => ({ ...s, date: e.target.value }))} InputLabelProps={{ shrink: true }} />
          <TextField label="Descrição" fullWidth multiline minRows={4} sx={{ mt: 2 }} value={edit.description} onChange={(e) => setEdit((s) => ({ ...s, description: e.target.value }))} />
        </DialogContent>
        <DialogActions sx={{ p: 2 }}>
          <Button variant="outlined" color="inherit" onClick={closeEdit}>Cancelar</Button>
          <Button variant="contained" onClick={saveEdit}>Atualizar</Button>
        </DialogActions>
      </Dialog>
    </Card>
  );
}
