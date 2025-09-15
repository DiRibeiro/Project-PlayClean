import { toastr } from 'react-redux-toastr';
import { reset } from 'redux-form';
import axios from 'axios';
import BASE_URL from '../config/consts';

export const TOKEN_VALIDATED = 'TOKEN_VALIDATED';
export const TOKEN_FETCHED = 'TOKEN_FETCHED';
export const LOGIN = 'LOGIN';

export const login = (values) => async (dispatch) => {
  dispatch({ type: LOGIN, payload: true });
  try {
    const { data, status } = await axios.post(`${BASE_URL}/login`, values);
    if (status === 202) {
      toastr.error('Erro!', data);
      return;
    }
    if (status === 200 && data?.token && data?.result?._id) {
      axios.defaults.headers.common.authorization = data.token;
      axios.defaults.headers.common._id = data.result._id;
      dispatch(reset('formLogin'));
      dispatch({ type: TOKEN_FETCHED, payload: data.token });
    } else {
      toastr.error('Erro!', 'Resposta inesperada do servidor.');
    }
  } catch {
    toastr.error('Erro!', 'Internal server error');
  } finally {
    dispatch({ type: LOGIN, payload: false });
  }
};

export const signup = (values) => async (dispatch) => {
  try {
    const { data, status } = await axios.post(`${BASE_URL}/signup`, values);
    if (status === 202) {
      toastr.error('Erro!', data);
    } else if (status === 200) {
      toastr.success('Sucesso!', data);
      dispatch(reset('formRegisterAccount'));
    }
  } catch {
    toastr.error('Erro!', 'Internal server error');
  }
};

export const logout = () => ({ type: TOKEN_VALIDATED, payload: false });

export const validatedToken = (token) => async (dispatch) => {
  if (!token) return dispatch({ type: TOKEN_VALIDATED, payload: false });
  try {
    const { data } = await axios.post(`${BASE_URL}/validateToken`, { token });
    dispatch({ type: TOKEN_VALIDATED, payload: !!data?.valid });
  } catch {
    dispatch({ type: TOKEN_VALIDATED, payload: false });
  }
};
