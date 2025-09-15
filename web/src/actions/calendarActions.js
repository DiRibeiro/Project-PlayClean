import axios from 'axios';
import { toastr } from 'react-redux-toastr';
import BASE_URL from '../config/consts';

export const changeTitle = (e) => ({ type: 'TITLE_CHANGED', payload: e.target.value });
export const changeFile = (e) => ({ type: 'FILE_CHANGED', payload: e.target.files?.[0] || null });
export const changeDescription = (e) => ({ type: 'DESCRIPTION_CHANGED', payload: e.target.value });
export const changeDate = (e) => ({ type: 'DATE_CHANGED', payload: e.target.value });

export const search = () => async (dispatch) => {
  try {
    const res = await axios.get(`${BASE_URL}/calendars`);
    dispatch({ type: 'TODO_SEARCHED', payload: res });
  } catch {
    toastr.error('Erro!', 'Internal server error');
  }
};

export const add = (title, description, dateOcurr, file) => async (dispatch) => {
  try {
    const fd = new FormData();
    fd.append('title', title || '');
    if (file) fd.append('image', file);
    fd.append('description', description || '');
    const shiftedISO = new Date(new Date(dateOcurr).getTime() + 12 * 3600 * 1000).toISOString();
    fd.append('dateOcurr', shiftedISO);

    const response = await axios.post(`${BASE_URL}/calendars`, fd);
    if (response.status === 200) {
      await dispatch(search());
      toastr.success('Sucesso!', 'Novo registro inserido com sucesso!');
    } else {
      toastr.error('Erro!', 'Falha ao inserir registro.');
    }
  } catch {
    toastr.error('Erro!', 'Favor preencher todos os campos.');
  }
};

export const remove = (_id) => async (dispatch) => {
  try {
    await axios.delete(`${BASE_URL}/calendars/${_id}`);
    toastr.success('Sucesso!', 'Registro removido com sucesso!');
    dispatch(search());
  } catch {
    toastr.error('Erro!', 'Internal server error');
  }
};

export const editTodo = (_id, title, description, dateOcurr, image) => async (dispatch) => {
  try {
    await axios.post(`${BASE_URL}/calendarsUpdate`, { _id, title, description, dateOcurr, image });
    toastr.success('Sucesso!', 'Registro editado com sucesso!');
    dispatch(search());
  } catch {
    toastr.error('Erro!', 'Internal server error');
  }
};

export const clear = () => (dispatch) => dispatch({ type: 'TODO_CLEAR', payload: '' });
