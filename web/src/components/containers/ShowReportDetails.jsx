import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { Box, Button, Card, CardContent, CardHeader, Dialog, DialogActions, DialogTitle, Grid, ImageList, ImageListItem, Stack, Typography } from '@mui/material';
import StatusChip from '../common/StatusChip';
import { setStatus, getReports, deleteReport } from '../../actions/reportActions';
import { fullDate } from '../../helper/date';

function StatusSelector({ value, onChange }) {
  const opts = [
    { v: 0, label: 'Aberta', tone: 'success' },
    { v: 1, label: 'Fechada', tone: 'error' },
    { v: 2, label: 'Pendente', tone: 'warning' },
  ];
  return (
    <Stack direction="row" spacing={1} alignItems="center" flexWrap="wrap">
      <Typography variant="body2">Trocar status para:</Typography>
      {opts.map((o) => (
        <Button key={o.v} size="small" variant={value === o.v ? 'contained' : 'outlined'} onClick={() => onChange(o.v)}>
          <StatusChip label={o.label} tone={o.tone} />
        </Button>
      ))}
    </Stack>
  );
}

export default function ShowReportDetails() {
  const dispatch = useDispatch();
  const { state } = useLocation();
  const navigate = useNavigate();

  const list = useSelector((s) => s.reports.list);
  const report = list.find((el) => el._id === state) || list.find((el) => el._id === state?.id);

  const [open, setOpen] = React.useState(false);

  React.useEffect(() => { dispatch(getReports()); }, [dispatch]);
  React.useEffect(() => {
    if (!report && list.length > 0) navigate('/listReport', { replace: true });
  }, [report, list.length, navigate]);

  const changeStatus = (v) => report && dispatch(setStatus(v, report._id));
  const confirmDelete = () => {
    if (report?._id) dispatch(deleteReport(report._id));
    setOpen(false);
    navigate('/listReport', { replace: true });
  };

  if (!report) return null;

  return (
    <Card>
      <CardHeader title="Detalhe da denúncia" />
      <CardContent>
        <Grid container spacing={3}>
          {/* Galeria simples em vez do carousel antigo */}
          <Grid item xs={12} md={4}>
            <Box className="box box-solid">
              <ImageList cols={1} gap={8}>
                {(report.images || []).map((img, i) => (
                  <ImageListItem key={i}>
                    <img src={`data:image/png;base64,${img}`} alt={`Imagem ${i + 1}`} loading="lazy" />
                  </ImageListItem>
                ))}
              </ImageList>
            </Box>
          </Grid>

          {/* Info */}
          <Grid item xs={12} md={8}>
            <StatusSelector value={report.status} onChange={changeStatus} />
            <Typography variant="subtitle1" sx={{ mt: 1 }}>
              <b>Tipo de denúncia:</b> {report.typeReport}
            </Typography>
            <Typography variant="body2">Cadastrado em: {fullDate(report.dateCreate)}</Typography>
            <Typography variant="body2">Ocorreu em: {fullDate(report.dateOcurr)}</Typography>
            <Box sx={{ my: 2 }}>
              <Typography variant="body2"><b>Onde ocorreu:</b> {report.adressOcurr}</Typography>
              <Typography variant="body2"><b>Nome:</b> {report.name}</Typography>
              <Typography variant="body2"><b>Telefone:</b> {report.phone}</Typography>
              <Typography variant="body2" sx={{ whiteSpace: 'pre-line' }}><b>Descrição:</b> {report.description}</Typography>
            </Box>

            <Stack direction="row" spacing={1}>
              <Button variant="outlined" color="error" onClick={() => setOpen(true)}>
                Remover
              </Button>
              <Button variant="contained" onClick={() => navigate('/listReport')}>Voltar</Button>
            </Stack>
          </Grid>
        </Grid>
      </CardContent>

      <Dialog open={open} onClose={() => setOpen(false)} maxWidth="xs" fullWidth>
        <DialogTitle>Deseja apagar esta denúncia?</DialogTitle>
        <DialogActions sx={{ p: 2 }}>
          <Button onClick={() => setOpen(false)} variant="outlined" color="inherit">Não</Button>
          <Button onClick={confirmDelete} variant="contained" color="error">Sim</Button>
        </DialogActions>
      </Dialog>
    </Card>
  );
}
