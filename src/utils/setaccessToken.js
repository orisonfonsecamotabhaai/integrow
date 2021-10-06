import setAxiosHeader from './setAxiosHeader';

const setAccessToken = (res) => {
  const accessToken = (res && res.data && res.data.authorization) || false;
  if (accessToken) {
    setAxiosHeader(accessToken);
    localStorage.setItem('accessToken', accessToken);
  }
  if (res === 'logOut') {
    setAxiosHeader(false);
    localStorage.removeItem('accessToken');
  }
};

export default setAccessToken;