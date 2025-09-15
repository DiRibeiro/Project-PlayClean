import { toastr } from 'react-redux-toastr';
import axios from 'axios';
import { reset } from 'redux-form';
import BASE_URL from '../config/consts';

export const PHOTOS_FETCHED = 'PHOTOS_FETCHED';
export const LOAD = 'LOAD';

export const getPhotos = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/photos`);
    dispatch({ type: PHOTOS_FETCHED, payload: data });
  } catch {
    toastr.error('Erro!', 'Internal server error');
  }
};

export const getPhotosId = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/photos/${id}`);
    dispatch({ type: PHOTOS_FETCHED, payload: data });
  } catch {
    toastr.error('Erro!', 'Internal server error');
  }
};

export const postPhotos = (values) => async (dispatch) => {
  dispatch({ type: LOAD, payload: true });
  try {
    const { status } = await axios.post(`${BASE_URL}/photos`, values);
    if (status === 400) {
      toastr.error('Erro!', 'Dados inválidos.');
      return;
    }
    toastr.success('Sucesso!', 'Nova foto inserida com sucesso!');
    dispatch(reset('newFormPhotos'));
    dispatch(getPhotos());
  } catch {
    toastr.error('Erro!', 'Internal server error');
  } finally {
    dispatch({ type: LOAD, payload: false });
  }
};

export const deleteGallery = (id) => async (dispatch) => {
  try {
    await axios.delete(`${BASE_URL}/photos/${id}`);
    toastr.success('OK!', 'Galeria removida');
    dispatch(getPhotos());
  } catch {
    toastr.error('Erro!', 'Internal server error');
  }
};

export const deleteSingleImg = (galleryID, imageID) => async (dispatch) => {
  try {
    await axios.delete(`${BASE_URL}/singlePhoto/${galleryID}/${imageID}`);
    toastr.success('OK!', 'Imagem removida');
    dispatch(getPhotos());
  } catch {
    toastr.error('Erro!', 'Internal server error');
  }
};
