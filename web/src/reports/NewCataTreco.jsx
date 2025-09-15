import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import FormCataTreco from './form/FormCataTreco';
import { postCataTreco } from '../actions/cataTrecoActions';

export default function CataTreco() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = React.useCallback(
    (values) => dispatch(postCataTreco(values, navigate)),
    [dispatch, navigate]
  );

  return <FormCataTreco onSubmit={onSubmit} />;
}
