import * as React from 'react';
import { useDispatch } from 'react-redux';
import { Card, CardContent, CardActions, Typography, Button } from '@mui/material';
import ConfirmDialog from '../components/common/ConfirmDialog';
import StatusChip from '../components/common/StatusChip';
import BASE_URL from '../config/consts';
import { deleteLeis } from '../actions/leisActions';

function statusChip(status) {
  if (status === 0) return <StatusChip label="Aberta" tone="success" />;
  if (status === 1) return <StatusChip label="Fechada" tone="default" />;
  return <StatusChip label="Pendente" tone="warning" />;
}

export default function RowLeis(props) {
  const dispatch = useDispatch();
  const lei = props.leis || props;
  const [open, setOpen] = React.useState(false);

  const onConfirmDelete = () => {
    dispatch(deleteLeis(lei._id));
    setOpen(false);
  };

  return (
    <Card variant="outlined" sx={{ mb: 2 }}>
      <CardContent className="listLeis">
        <Typography variant="h6">{lei.title}</Typography>
        <Typography variant="body2" sx={{ mb: 1 }}>Tipo de lei: {lei.type}</Typography>
        <Typography variant="body2" sx={{ mb: 1 }}>{lei.description}</Typography>
        <Button
          component="a"
          href={`${BASE_URL}/${lei.file}`}
          target="_blank"
          rel="noopener noreferrer"
          size="small"
        >
          Abrir arquivo
        </Button>
      </CardContent>
      <CardActions sx={{ px: 2, pb: 2, justifyContent: 'space-between' }}>
        {statusChip(lei.status)}
        <Button variant="outlined" color="error" onClick={() => setOpen(true)}>
          Remover
        </Button>
      </CardActions>

      <ConfirmDialog
        open={open}
        title="Deseja apagar esta lei?"
        onClose={() => setOpen(false)}
        onConfirm={onConfirmDelete}
      />
    </Card>
  );
}
