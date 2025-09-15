import * as React from 'react';
import { useDispatch } from 'react-redux';
import FormLogin from './form/FormLogin';
import { login } from '../actions/authActions';

export default function Auth() {
  const dispatch = useDispatch();
  const onSubmit = React.useCallback((values) => dispatch(login(values)), [dispatch]);
  return <FormLogin onSubmit={onSubmit} />;
}
