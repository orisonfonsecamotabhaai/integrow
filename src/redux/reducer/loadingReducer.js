import {
    LOADING,
    SUCCESS_MESSAGE,
    ERROR_MESSAGE,
    MODAL,
    SET_ALERT_MODAL,
    SET_AUTH_MODAL,
  } from '../type';
  
  const initialState = {
    isLoading: false,
    isSuccess: false,
    successMessage: false,
    errorMessage: false,
    modal: '',
    alertModalType: false,
    authModal: false,
  };
  
  const loadingReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
      case LOADING:
        return {
          ...state,
          isLoading: payload.isLoading,
          isSuccess: payload.isSuccess,
        };
      case SUCCESS_MESSAGE:
        return {
          ...state,
          successMessage: payload,
        };
      case ERROR_MESSAGE:
        return {
          ...state,
          errorMessage: payload,
        };
      case MODAL:
        return {
          ...state,
          modal: payload,
        };
      case SET_ALERT_MODAL:
        return {
          ...state,
          alertModalType: payload,
        };
      case SET_AUTH_MODAL:
        return {
          ...state,
          authModal: payload,
        };
      default:
        return { ...state };
    }
  };
  export default loadingReducer;