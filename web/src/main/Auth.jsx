import '../utils/dependences';
import '../utils/custom.css';

import * as React from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

import MainRouter from './Routes';
import Authenticate from '../reports/Authenticate';
import { validatedToken } from '../actions/authActions';

function CenterLoader({ label = 'Carregando...' }) {
  return (
    <div style={{
      position: 'absolute', left: '50%', top: '40%',
      transform: 'translate(-50%, -50%)', display: 'flex',
      alignItems: 'center', gap: 8
    }}>
      <i className="fas fa-circle-notch fa-spin" aria-hidden="true" />
      <span>{label}</span>
    </div>
  );
}

export default function AuthGate() {
  const dispatch = useDispatch();
  const { user: token, validToken } = useSelector((s) => s.auth);
  const user = useSelector((s) => s.user.personalInfo);

  // valida o token sempre que mudar
  React.useEffect(() => {
    if (token) dispatch(validatedToken(token));
  }, [token, dispatch]);

  // configura axios apenas quando token/usuario disponíveis
  React.useEffect(() => {
    if (token && validToken) {
      axios.defaults.headers.common.authorization = token;
      if (user?._id) axios.defaults.headers.common._id = user._id;
    } else {
      delete axios.defaults.headers.common.authorization;
      delete axios.defaults.headers.common._id;
    }
  }, [token, validToken, user?._id]);

  if (token && validToken) return <MainRouter />;
  if (!token) return <Authenticate />;
  return <CenterLoader />;
}
