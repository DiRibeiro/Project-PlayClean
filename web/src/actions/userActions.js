import { toastr } from 'react-redux-toastr';
import axios from 'axios';
import { reset } from 'redux-form';
import BASE_URL from '../config/consts';

export const USER_FETCHED = 'USER_FETCHED';
export const TOKEN_FETCHED = 'TOKEN_FETCHED';
export const LOAD = 'LOAD';

export const tradeTokenToUser = (token) => async (dispatch) => {
  const tokenID = token || axios.defaults.headers.common.authorization;
  try {
    const { data, status } = await axios.post(`${BASE_URL}/tradeTokenToUser`, tokenID);
    if (status === 400) {
      toastr.error('Erro!', data);
      return;
    }
    dispatch({ type: USER_FETCHED, payload: data });
  } catch {
    toastr.error('Erro!', 'Internal server error');
  }
};

export const updateUser = (values) => async (dispatch) => {
  dispatch({ type: LOAD, payload: true });
  try {
    const { data, status } = await axios.post(`${BASE_URL}/updateUser`, values);
    if (status === 202) {
      toastr.error('Erro!', data);
      return;
    }
    if (status === 200 && data?.token && data?.result?._id) {
      toastr.success('Sucesso!', 'Usuário atualizado com sucesso!');
      axios.defaults.headers.common.authorization = data.token;
      axios.defaults.headers.common._id = data.result._id;
      dispatch(reset('formChangeAccount'));
      dispatch({ type: TOKEN_FETCHED, payload: data.token });
      dispatch({ type: USER_FETCHED, payload: data.result });
    } else {
      toastr.error('Erro!', 'Resposta inesperada do servidor.');
    }
  } catch {
    toastr.error('Erro!', 'Internal server error');
  } finally {
    dispatch({ type: LOAD, payload: false });
  }
};
