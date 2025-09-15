import { toastr } from 'react-redux-toastr';
import axios from 'axios';
import { reset } from 'redux-form';
import BASE_URL from '../config/consts';

export const getCataTreco = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/allCataTreco`);
    dispatch({ type: 'CATATRECO_FETCHED', payload: data });
  } catch {
    toastr.error('Erro!', 'Internal server error');
  }
};

export const postCataTreco = (values, navigate) => async (dispatch) => {
  try {
    const response = await axios.post(`${BASE_URL}/cataTreco`, values);
    if (response.status === 400) {
      toastr.error('Erro!', response);
      return;
    }
    dispatch(reset('newCataTrecoForm'));
    if (typeof navigate === 'function') navigate('/listCataTreco', { replace: true });
    toastr.success('Sucesso!', 'Novo registro inserido com sucesso!');
  } catch {
    toastr.error('Erro!', 'Internal server error');
  }
};

export const setStatus = (_id, status, dateOcurr) => async (dispatch) => {
  try {
    const response = await axios.post(`${BASE_URL}/cataTrecoStatus`, { _id, status, dateOcurr });
    if (response.status === 202) {
      toastr.error('Erro!', response);
      return;
    }
    toastr.success('Sucesso!', 'Registro atualizado com sucesso!');
    dispatch(getCataTreco());
  } catch {
    toastr.error('Erro!', 'Internal server error');
  }
};

export const removeCataTreco = (_id) => async (dispatch) => {
  try {
    const response = await axios.delete(`${BASE_URL}/cataTreco/${_id}`);
    if (response.status === 202) {
      toastr.error('Erro!', response);
      return;
    }
    toastr.success('Sucesso!', 'Registro removido com sucesso!');
    dispatch(getCataTreco());
  } catch {
    toastr.error('Erro!', 'Internal server error');
  }
};
