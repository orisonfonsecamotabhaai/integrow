import axios from 'axios';
import baseUrl from '../../config/baseUrl.js';
import setAxiosHeader from '../../utils/setAxiosHeader';
import setAccessToken from '../../utils/setaccessToken';
import {
  GET_SIGNUP_DATA,
} from '../type';
import { setLoading, setSuccessMessage } from './loadingAction';

const register = (data) => async (dispatch) => {
  try {
    dispatch(setLoading({ isLoading: true, isSuccess: false }));
    const res = await axios.post(`${baseUrl}/auth/register`, data);
    dispatch({ type: GET_SIGNUP_DATA, payload: res.data });
    dispatch(setSuccessMessage(res.data.message || ''));
  } catch (error) {
    console.log(error.response);
  }
};

const addPassword = (data) => async (dispatch) => {
  try {
    dispatch(setLoading({ isLoading: true, isSuccess: false }));
    await axios.post(`${baseUrl}/auth/addPassword`, data);
  } catch (error) {
    console.log(error.response);
  }
};

/*const loadUser = () => async (dispatch) => {
  try {
    if (localStorage.accessToken) {
      // Set Axios default header
      setAxiosHeader(localStorage.accessToken);
      const res = await axios.get(`${baseUrl}/auth/me`);
      dispatch({ type: LOAD_USER, payload: res.data.user });
    } else {
      dispatch(logout());
    }
  } catch (error) {
    dispatch(logout());
  }
};*/

const login = (data) => async (dispatch) => {
  try {
      alert('ju')
    dispatch(setLoading({ isLoading: true, isSuccess: false }));
    const res = await axios.post(`${baseUrl}/login?${data}`);
    if(res.status == 200) {
        setAccessToken(res.token)
    }
    //dispatch(loadUser());
  } catch (error) {
    console.log(error.response);
  }
};

export default {
  register,
  addPassword,
  login,  
};