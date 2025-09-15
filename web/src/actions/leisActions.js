import { toastr } from 'react-redux-toastr';
import axios from 'axios';
import { reset } from 'redux-form';
import BASE_URL from '../config/consts';

export const LEIS_FETCHED = 'LEIS_FETCHED';

export const getLeis = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/leis`);
    dispatch({ type: LEIS_FETCHED, payload: data });
  } catch {
    toastr.error('Erro!', 'Internal server error');
  }
};

export const postLeis = (values, navigate) => async (dispatch) => {
  try {
    // se "values" for FormData, o axios define multipart automaticamente
    const { status } = await axios.post(`${BASE_URL}/leis`, values);
    if (status === 400) {
      toastr.error('Erro!', 'Dados inválidos.');
      return;
    }
    dispatch(reset('newLeisForm'));
    if (typeof navigate === 'function') navigate('/listLeis', { replace: true });
    toastr.success('Sucesso!', 'Novo registro inserido com sucesso!');
  } catch {
    toastr.error('Erro!', 'Internal server error');
  }
};

export const deleteLeis = (id) => async (dispatch) => {
  try {
    await axios.delete(`${BASE_URL}/leis/${id}`);
    toastr.success('Sucesso!', 'Registro removido.');
    dispatch(getLeis());
  } catch {
    toastr.error('Erro!', 'Internal server error');
  }
};
