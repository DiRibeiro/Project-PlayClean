import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Card, CardContent, CardActions, Typography, Button } from '@mui/material';
import StatusChip from '../components/common/StatusChip';
import { fullDate } from '../helper/date';

function statusChip(status) {
  if (status === 0) return <StatusChip label="Aberta" tone="success" />;
  if (status === 1) return <StatusChip label="Fechada" tone="error" />;
  return <StatusChip label="Pendente" tone="warning" />;
}

export default function RowReport(props) {
  const report = props.report || props;

  return (
    <Card variant="outlined" sx={{ mb: 2 }}>
      <CardContent className="listReport">
        <Typography variant="h6">{report.title}</Typography>
        <Typography variant="subtitle2" sx={{ mt: 0.5 }}>
          <b>Tipo de Denúncia:</b> {report.typeReport}
        </Typography>
        <Typography variant="body2" sx={{ my: 1 }}>
          Cadastrado em {fullDate(report.dateCreate)}
        </Typography>
        <Typography className="reportDescription" variant="body2" sx={{ whiteSpace: 'pre-line' }}>
          {report.description}
        </Typography>
      </CardContent>
      <CardActions sx={{ px: 2, pb: 2, justifyContent: 'space-between' }}>
        {statusChip(report.status)}
        <Button
          component={RouterLink}
          to="/showDetailReport"
          state={{ id: report._id }}
          variant="contained"
          size="small"
        >
          Ver mais
        </Button>
      </CardActions>
    </Card>
  );
}
