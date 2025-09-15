import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Card, CardContent, CardActions, Typography, Button, Stack } from '@mui/material';
import StatusChip from '../components/common/StatusChip';
import { fullDate } from '../helper/date';

function statusView(status) {
  if (status === 1) return <StatusChip label="Agendado" tone="success" />;
  if (status === 2) return <StatusChip label="Realizado" tone="info" />;
  return <StatusChip label="Pendente" tone="warning" />;
}

export default function RowCataTreco(props) {
  const c = props.cataTreco || props;

  return (
    <Card variant="outlined" sx={{ mb: 2 }}>
      <CardContent className="listCataTreco">
        <Typography variant="h6">{c.name}</Typography>
        <Typography variant="body2" sx={{ mb: 1 }}>
          <b>Protocolo:</b> {c.protocol}
        </Typography>
        <Typography variant="body2" sx={{ mb: 1 }}>
          Cadastrado em {fullDate(c.dateCreate)}
        </Typography>
        <Typography variant="body2" sx={{ mb: 1 }}>{c.description}</Typography>
        {c.dateOcurr && (
          <Typography variant="body2">Agendado para {fullDate(c.dateOcurr)}</Typography>
        )}
      </CardContent>
      <CardActions sx={{ px: 2, pb: 2 }}>
        <Stack direction="row" spacing={1} alignItems="center" sx={{ width: '100%', justifyContent: 'space-between' }}>
          {statusView(c.status)}
          <Button
            component={RouterLink}
            to="/showDetailCataTreco"
            state={{ id: c._id }}
            variant="contained"
            size="small"
          >
            Ver mais
          </Button>
        </Stack>
      </CardActions>
    </Card>
  );
}
