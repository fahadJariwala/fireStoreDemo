const axios = require('axios');
const CancelToken = axios.CancelToken;
let source = CancelToken.source();

axios.defaults.headers.common = {
  'Content-Type': 'application/json; charset=utf-8',
  Accept: 'application/json; charset= utf-8',
};
const SetHeaderAuthorization = token => {
  if (token) {
    axios.defaults.headers.common.Authorization = `Bearer${token}`;
  } else {
    delete axios.defaults.headers.common.Authorization;
  }
};

const cancelAllRequest = () => {
  source.cancel();
  setTimeout(() => {
    source = CancelToken.source();
  }, 2000);
};

const getResponse = res => {
  console.log('Response = ', res);
  if (res && (res.status === 200 || res.status === 201 || res.status === 204)) {
    if (res.status === 201 || res.status === 204) {
      res.data = true;
    }
    return res.data;
  }
  throw new Error('Some error occur');
};

const get = (path, params) => {
  return new Promise((resolve, reject) => {
    try {
      axios.get(path, { params }).then(getResponse).then(resolve).catch(reject);
    } catch (error) {
      reject(error);
    }
  });
};
const post = (path, params) => {
  return new Promise((resolve, reject) => {
    try {
      axios
        .post(path, params || {})
        .then(getResponse)
        .then(resolve)
        .catch(reject);
    } catch (error) {
      reject(error);
    }
  });
};

const put = (path, params, headers) => {
  return new Promise((resolve, reject) => {
    try {
      axios
        .put(path, params || {}, headers)
        .then(getResponse)
        .then(resolve)
        .catch(reject);
    } catch (error) {
      reject(error);
    }
  });
};
const remove = (path, params, headers) => {
  return new Promise((resolve, reject) => {
    try {
      axios
        .remove(path, params || {}, headers)
        .then(getResponse)
        .then(resolve)
        .catch(reject);
    } catch (error) {
      reject(error);
    }
  });
};

export default {
  get,
  post,
  put,
  remove,
  SetHeaderAuthorization,
  cancelAllRequest,
};
