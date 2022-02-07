import {loginMethod, registerMethod, userInfo, placeOrder,getOrder} from '../../../api/Methods';
import {LOGIN_SUCCESS, LOGIN_USER, LOGIN_FAILED,  } from '../constant/index';

export const loginActionHandler = data => dispatch => {
  dispatch({type: LOGIN_USER});
  return new Promise(async (resolve, reject) => {
    loginMethod(data)
      .then(respData => {
        respData = respData;
        if (respData?.code === 200) {
          dispatch({type: LOGIN_SUCCESS, payload: respData});
        } else {
          dispatch({type: LOGIN_FAILED, payload: respData});
        }
        let {code,userId, token, name, email} = respData;
        const response = {userId, code, token, name, email};
        return resolve(response);
      })
      .catch(error => {
        return reject(false);
      });
  });
};

// register action handler
export const registerActionHandler =   data => dispatch => {
  console.log('register', data)
  return new Promise(async function (resolve) {
    registerMethod(data)
      .then(response => {
        console.log(' register respnse ---->', response)
        return resolve(response);
      })
      .catch(() => {
        return resolve(false);
      });
  });
};

export const getUserInfoHandler =   data => dispatch => {
  return new Promise(async function (resolve) {
    userInfo(data)
      .then(response => {
        console.log(' register respnse ---->', response)
        return resolve(response);
      })
      .catch(() => {
        return resolve(false);
      });
  });
};

export const placeOrderHanlder =   data => dispatch => {
  return new Promise(async function (resolve) {
    placeOrder(data)
      .then(response => {
        return resolve(response);
      })
      .catch(() => {
        return resolve(false);
      });
  });
};


export const getOrderHanlder =   data => dispatch => {
  return new Promise(async function (resolve) {
    getOrder(data)
      .then(response => {
        return resolve(response);
      })
      .catch(() => {
        return resolve(false);
      });
  });
};


