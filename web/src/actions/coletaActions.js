import { toastr } from 'react-redux-toastr';
import axios from 'axios';
import { reset } from 'redux-form';
import BASE_URL from '../config/consts';

export const COLETA_FETCHED = 'COLETA_FETCHED';

export const getColeta = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/coleta`);
    dispatch({ type: COLETA_FETCHED, payload: data });
  } catch {
    toastr.error('Erro!', 'Internal server error');
  }
};

export const postColeta = (values) => async (dispatch) => {
  try {
    const response = await axios.post(`${BASE_URL}/coleta`, values);
    if (response.status === 400) {
      toastr.error('Erro!', 'Dados inválidos.');
      return;
    }
    dispatch(reset('newColetaForm'));
    toastr.success('Sucesso!', 'Novo registro inserido com sucesso!');
    dispatch(getColeta());
  } catch {
    toastr.error('Erro!', 'Internal server error');
  }
};

export const deleteColeta = (_id) => async (dispatch) => {
  try {
    await axios.delete(`${BASE_URL}/coleta/${_id}`);
    toastr.success('Sucesso!', 'Registro removido.');
    dispatch(getColeta());
  } catch {
    toastr.error('Erro!', 'Internal server error');
  }
};

export const editColeta = (_id, neighborhood, organic, selective) => async (dispatch) => {
  try {
    await axios.post(`${BASE_URL}/coletaUpdate`, { _id, neighborhood, organic, selective });
    toastr.success('Sucesso!', 'Registro editado com sucesso!');
    dispatch(getColeta());
  } catch {
    toastr.error('Erro!', 'Internal server error');
  }
};
