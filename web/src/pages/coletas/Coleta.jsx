import * as React from 'react';
import { useDispatch } from 'react-redux';
import { postColeta, getColeta } from '../../actions/coletaActions';
import ColetaForm from './ColetaForm';

export default function Coleta() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getColeta());
  }, [dispatch]);

  const handleForm = React.useCallback((values) => {
    dispatch(postColeta(values));
  }, [dispatch]);

  return <ColetaForm onSubmit={handleForm} />;
}
