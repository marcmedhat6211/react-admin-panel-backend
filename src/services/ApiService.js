const BASE_URL = "http://localhost:8084/api";

const sendRequest = async (url, method, requestBody = {}) => {
  let requestConfig = {
    method: method,
    headers: {
      Authorization:
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2OTkxMjAyMDAsImV4cCI6MTY5OTE1NjIwMCwicm9sZXMiOlsiUk9MRV9JTlRFUk5BTF9VU0VSIiwiUk9MRV9VU0VSIl0sImVtYWlsIjoibWFyY0BnbWFpbC5jb20ifQ.ppICgZw1XlelIvrc2Vq5g0yy4Rrn6OCVrlXc5mSpCZ8En8EAfCqiMN-dfHG_sBwZanmSjc-NlYZuwkKan59_kftR-btBo-B7sQqSjzRkEEd_NSOht45t0xFqwR9OCGwbk0TNKwe65EDi-A01ppgDFL1eL_tXqT-uuRbLqa1Fg67uaIipC1aPDdu59Wc1hmOQQWNzW2peLSgdHn7z6GdR0MvFbbKY9M36VmT71KCbh8RSB1bRjfOP4R9y7JBl78C8PZ-maXVsC1xA3yTR-7B_2LmD0iW5fMtBvupHspNaCAaseEROwdCm-BXKfAeTDMMDJE1_ThVK_A_qotqlPx8-cg",
    },
  };

  if (Object.keys(requestBody).length > 0) {
    requestConfig = { ...requestConfig, body: JSON.stringify(requestBody) };
  }

  const serverResponse = await fetch(BASE_URL + url, requestConfig);
  if (serverResponse.ok) {
    const finalResponse = await serverResponse.json();
    return finalResponse;
  } else {
    // error message for the user
    return false;
  }

  // .then((res) => {
  //   if (res.ok) {
  //     return res.json();
  //   } else {
  //     return false;
  //   }
  // })
  // .then((finalReponse) => {
  //   // setProducts(finalReponse.data);
  // 	return finalReponse
  // })
  // ;
};

export { sendRequest };
