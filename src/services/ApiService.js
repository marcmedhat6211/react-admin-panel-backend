const BASE_URL = "http://localhost:8084/api/";

const sendRequest = async (url, method, requestBody = {}) => {
  // console.log(requestBody);
  // // url = posts.json
  let requestConfig = {
    method: method,
    headers: {
      Authorization:
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2OTgwODk5NTEsImV4cCI6MTY5ODEyNTk1MSwicm9sZXMiOlsiUk9MRV9JTlRFUk5BTF9VU0VSIiwiUk9MRV9VU0VSIl0sImVtYWlsIjoibWFyY0BnbWFpbC5jb20ifQ.OMBr3u-RhXCdKBAQ9yePWPR3YMPQmR3s-uBs5UhdSHGKlC-BIld_zJJheRCZlEUq0fPXJ061YiWREQk-ZL3vhvmkwK4dW_2ToG4nEhjL_6EKmFGjYf_DXS2gT8ApZQaVwORgssspgr6CLSKx-ruCvgpINjyVccrlLgmSfiRVZsE2SuSz5mhhf1EgHwpz19m9irBZ0OHxlA_zR_D246OMpSI6FDgPWWj-1U8QUrQpod8HsISoKXjroBix2Ik58NEWWCdPU50E7mgwFSvmcEoIbDckVPT-87ctohQG7KKdungAVVAP7tqVcc4Z-FLqoUbhuDtzcOHt4ZQyMcO20riL5g",
      // Authorization: localStorage.getItem('token'),
    },
  };

  // // ['title', 'desc']
  // // []
  const keys = Object.keys(requestBody);
  if (keys.length > 0) {
    requestConfig = {
      ...requestConfig,
      body: JSON.stringify(requestBody),
    };
  }

  const serverResponse = await fetch(`${BASE_URL}${url}`, requestConfig);
  if (serverResponse.ok) {
    let response = await serverResponse.json();
    return response;
  } else {
    return false;
  }
};

export { sendRequest };
