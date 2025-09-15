import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { Card, CardHeader, CardContent, Typography } from '@mui/material';
import { getLeis } from '../actions/leisActions';

export default function ShowLeisDetails() {
  const dispatch = useDispatch();
  const { state } = useLocation();
  const navigate = useNavigate();

  const leis = useSelector((s) => s.leis.list);
  const lei = leis.find((el) => el._id === state) || leis.find((el) => el._id === state?.id);

  React.useEffect(() => { dispatch(getLeis()); }, [dispatch]);
  React.useEffect(() => {
    if (!lei && leis.length > 0) navigate('/listLeis', { replace: true });
  }, [lei, leis.length, navigate]);

  if (!lei) return null;

  return (
    <Card>
      <CardHeader title={`Lei ${lei.typeLei}`} />
      <CardContent>
        <Typography variant="body1"><b>Artigo:</b> {lei.name}</Typography>
        <Typography variant="body1" sx={{ mt: 1 }}><b>Descrição:</b> {lei.description}</Typography>
      </CardContent>
    </Card>
  );
}
