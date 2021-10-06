import {
    GET_SIGNUP_DATA,
    GET_OTP_DATA,
    LOAD_USER,
    LOGOUT,
    FORGOT_PASSWORD,
    FORGOT_PASSWORD_OTP,
  } from '../type';
  
  const initialState = {
    signUpData: {
      data: null,
      message: '',
      success: false,
    },
    otpData: {
      data: null,
      success: false,
    },
    forgotPassword: { phone: '' },
    forgotPasswordOTP: null,
    isAuthenticated: false,
    user: null,
    loading: true,
  };
  
  const authReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
      case GET_SIGNUP_DATA:
        return {
          ...state,
          signUpData: payload,
        };
      case GET_OTP_DATA:
        return {
          ...state,
          otpData: payload,
        };
      case LOAD_USER:
        return {
          ...state,
          isAuthenticated: true,
          user: payload,
          loading: false,
        };
      case LOGOUT:
        return {
          ...state,
          isAuthenticated: false,
          user: null,
          signUpData: {
            data: null,
            message: '',
            success: false,
          },
          otpData: {
            data: null,
            success: false,
          },
          loading: false,
        };
      case FORGOT_PASSWORD:
        return {
          ...state,
          forgotPassword: payload,
        };
      case FORGOT_PASSWORD_OTP:
        return {
          ...state,
          forgotPasswordOTP: payload,
        };
  
      default:
        return { ...state };
    }
  };
  export default authReducer;