import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getColeta, deleteColeta, editColeta } from '../../actions/coletaActions';
import { Card, CardContent, CardHeader, IconButton, Table, TableBody, TableCell, TableHead, TableRow, Tooltip } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ConfirmDialog from '../../components/common/ConfirmDialog';
import EditTextAreasDialog from '../../components/common/EditTextAreasDialog';

export default function ListColetas() {
  const dispatch = useDispatch();
  const allColetas = useSelector((s) => s.coleta.coleta);

  const [confirm, setConfirm] = React.useState({ open: false, idx: -1 });
  const [edit, setEdit] = React.useState({ open: false, idx: -1, organic: '', selective: '' });

  React.useEffect(() => { dispatch(getColeta()); }, [dispatch]);

  const openDelete = (idx) => setConfirm({ open: true, idx });
  const closeDelete = () => setConfirm({ open: false, idx: -1 });
  const doDelete = () => {
    const c = allColetas[confirm.idx];
    if (c?._id) dispatch(deleteColeta(c._id));
    closeDelete();
  };

  const openEdit = (idx) => {
    const c = allColetas[idx];
    setEdit({ open: true, idx, organic: c?.organic ?? '', selective: c?.selective ?? '' });
  };
  const closeEdit = () => setEdit((s) => ({ ...s, open: false }));
  const changeEdit = (i, v) => setEdit((s) => ({ ...s, [i === 0 ? 'organic' : 'selective']: v }));
  const saveEdit = () => {
    const c = allColetas[edit.idx];
    if (c?._id) dispatch(editColeta(c._id, c.neighborhood, edit.organic, edit.selective));
    closeEdit();
  };

  return (
    <Card>
      <CardHeader title="Coletas" />
      <CardContent>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Bairro</TableCell>
              <TableCell>Descrição Orgânica</TableCell>
              <TableCell>Descrição Seletiva</TableCell>
              <TableCell align="right">Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allColetas.map((c, idx) => (
              <TableRow key={c._id ?? idx}>
                <TableCell>{c.neighborhood}</TableCell>
                <TableCell>{c.organic}</TableCell>
                <TableCell>{c.selective}</TableCell>
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

      <ConfirmDialog
        open={confirm.open}
        title={confirm.idx >= 0 ? `Deseja apagar esta coleta (${allColetas[confirm.idx]?.neighborhood})?` : ''}
        onClose={closeDelete}
        onConfirm={doDelete}
        confirmText="Sim"
        cancelText="Não"
      />

      <EditTextAreasDialog
        open={edit.open}
        title={edit.idx >= 0 ? `Editar coleta: ${allColetas[edit.idx]?.neighborhood}` : 'Editar'}
        labels={['Descrição Coleta Orgânica', 'Descrição Coleta Seletiva']}
        values={[edit.organic, edit.selective]}
        onChange={changeEdit}
        onClose={closeEdit}
        onSave={saveEdit}
      />
    </Card>
  );
}
