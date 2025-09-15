import { toastr } from 'react-redux-toastr';
import BASE_URL from '../config/consts';
import axios from 'axios';

export const DASHBOARD_FETCHED = 'DASHBOARD_FETCHED';

export const getDashboardData = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/dashboardReports`);
    dispatch({ type: DASHBOARD_FETCHED, payload: data });
  } catch {
    toastr.error('Erro!', 'Internal server error');
  }
};
