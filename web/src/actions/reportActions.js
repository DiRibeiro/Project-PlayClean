import { toastr } from 'react-redux-toastr';
import axios from 'axios';
import { reset } from 'redux-form';
import BASE_URL from '../config/consts';

export const REPORTS_FETCHED = 'REPORTS_FETCHED';
export const STATUS_FETCHED = 'STATUS_FETCHED';
export const LOAD = 'LOAD';

export const getReports = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/report`);
    dispatch({ type: REPORTS_FETCHED, payload: data });
  } catch {
    toastr.error('Erro!', 'Internal server error');
  }
};

export const postReport = (values, navigate) => async (dispatch) => {
  dispatch({ type: LOAD, payload: true });
  try {
    const { status } = await axios.post(`${BASE_URL}/report`, values);
    if (status === 400) {
      toastr.error('Erro!', 'Dados inválidos.');
      return;
    }
    dispatch(reset('newReportForm'));
    if (typeof navigate === 'function') navigate('/listReport', { replace: true });
    toastr.success('Sucesso!', 'Novo registro inserido com sucesso!');
  } catch {
    toastr.error('Erro!', 'Internal server error');
  } finally {
    dispatch({ type: LOAD, payload: false });
  }
};

export const setStatus = (status, _id) => async (dispatch) => {
  try {
    const response = await axios.post(`${BASE_URL}/reportStatus`, { status, _id });
    if (response.status === 202) {
      toastr.error('Erro!', 'Atualização não permitida.');
      return;
    }
    toastr.success('Sucesso!', 'Registro atualizado com sucesso!');
    dispatch(getReports());
  } catch {
    toastr.error('Erro!', 'Internal server error');
  }
};

export const getStatus = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/reportStatus`);
    dispatch({ type: STATUS_FETCHED, payload: data });
  } catch {
    toastr.error('Erro!', 'Internal server error');
  }
};

export const deleteReport = (id) => async (dispatch) => {
  try {
    await axios.delete(`${BASE_URL}/report/${id}`);
    toastr.success('Sucesso!', 'Registro removido.');
    dispatch(getReports());
  } catch {
    toastr.error('Erro!', 'Internal server error');
  }
};
