import axios from 'axios';
// import {StoreContext} from '../Context/Store';
// import {useContext} from 'react';

export const verifyToken = token => {
  axios({
    method: 'get',
    url: `/api/student/authenticated`,
    headers: {'x-auth-token': token},
  })
    .then(res => {
      if (res.data.isAuthenticated) {
        return true;
      } else {
        return false;
      }
    })
    .catch(err => {
      return false;
    });
};
