import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { Box, Button, Card, CardContent, CardHeader, Grid, TextField, Typography, Stack } from '@mui/material';
import { setStatus, getCataTreco, removeCataTreco } from '../actions/cataTrecoActions';
import { fullDate, shortDate } from '../helper/date';

export default function ShowCataTrecoDetails() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { state } = useLocation();
  const ctId = state?.id;

  const list = useSelector((s) => s.cataTreco.list);
  const ct = list.find((el) => el._id === ctId);

  const [dateOcurr, setDateOcurr] = React.useState('');

  React.useEffect(() => {
    dispatch(getCataTreco());
  }, [dispatch]);

  React.useEffect(() => {
    if (!ct && list.length > 0) navigate('/listCataTreco', { replace: true });
  }, [ct, list.length, navigate]);

  const canSchedule = ct && (!ct.dateOcurr || ct.status === 0);
  const confirm = () => {
    if (!ct) return;
    if (!dateOcurr) return;
    if (new Date(dateOcurr) < new Date(ct.dateCreate)) return;
    dispatch(setStatus(ct._id, 1, new Date(dateOcurr)));
  };

  const remove = () => ct && dispatch(removeCataTreco(ct._id));

  if (!ct) return null;

  return (
    <Card>
      <CardHeader title="Cata-Treco" />
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <Stack spacing={1}>
              <Typography variant="body2">Cadastrado em: {fullDate(ct.dateCreate)}</Typography>
              <Typography variant="body2"><b>Protocolo:</b> {ct.protocol}</Typography>
              <Typography variant="body2"><b>Onde ocorreu:</b> {ct.adressOcurr}</Typography>
              <Typography variant="subtitle1">Informações sobre o denunciante</Typography>
              <Typography variant="body2"><b>Nome:</b> {ct.name}</Typography>
              <Typography variant="body2"><b>CPF:</b> {ct.cpf}</Typography>
              <Typography variant="body2"><b>Local:</b> {ct.local}</Typography>
              <Typography variant="body2"><b>Descrição:</b> {ct.description}</Typography>
            </Stack>
          </Grid>
        </Grid>

        <Box sx={{ mt: 3 }}>
          {canSchedule ? (
            <>
              <Typography variant="h6">Agendar para</Typography>
              <Stack direction="row" spacing={1} alignItems="center" sx={{ mt: 1 }}>
                <TextField
                  id="dateOcurr"
                  type="date"
                  value={dateOcurr}
                  onChange={(e) => setDateOcurr(e.target.value)}
                  InputLabelProps={{ shrink: true }}
                  sx={{ width: 280 }}
                />
                <Button variant="contained" onClick={confirm}>Confirmar</Button>
                <Button variant="outlined" color="error" onClick={remove}>Remover</Button>
              </Stack>
            </>
          ) : (
            <>
              <Typography variant="h6">Agendado para o dia: {shortDate(ct.dateOcurr)}</Typography>
              <Stack direction="row" spacing={1} alignItems="center" sx={{ mt: 1 }}>
                <TextField
                  id="dateOcurr"
                  type="date"
                  value={dateOcurr}
                  onChange={(e) => setDateOcurr(e.target.value)}
                  InputLabelProps={{ shrink: true }}
                  sx={{ width: 280 }}
                />
                <Button variant="contained" onClick={confirm}>Atualizar Agendamento</Button>
                <Button variant="outlined" color="error" onClick={remove}>Remover</Button>
              </Stack>
            </>
          )}
        </Box>
      </CardContent>
    </Card>
  );
}
