import { toastr } from 'react-redux-toastr';
import BASE_URL from '../config/consts';
import axios from 'axios';

export const DASHBOARD_CT_FETCHED = 'DASHBOARD_CT_FETCHED';

export const getDashboardCtData = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/dashboardCataTreco`);
    dispatch({ type: DASHBOARD_CT_FETCHED, payload: data });
  } catch {
    toastr.error('Erro!', 'Internal server error');
  }
};
