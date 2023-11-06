const BASE_URL = "http://localhost:8084/api";

const sendRequest = async (url, method, requestBody = {}) => {
  let requestConfig = {
    method: method,
    headers: {
      Authorization:
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2OTkzMDMwODYsImV4cCI6MTY5OTMzOTA4Niwicm9sZXMiOlsiUk9MRV9JTlRFUk5BTF9VU0VSIiwiUk9MRV9VU0VSIl0sImVtYWlsIjoibWFyY0BnbWFpbC5jb20ifQ.TkMG41QeMGYZLEoIh9WvLlVRwgPz4_3K-ZIvWx2R71Xi_ifqPB0yEJroTC8Ec0IsGJDXKdVmgC_Y2VH83Lxf8Hly-hJ8ES9IsuVcAu8CPMWlB_7IPhYqVsvhozTJPMaqJatPMkthsg9A8pHQBtsQ0IHZyu2OXcSfevK5LQM9sZptvpkYDB0-xUljVkeGGeG5AT3saQxqHNsg5rOkIcYwTt6cVDQrv5JRo2KccJu4cQrmWWl5X1vEHVZBysxXC4e_qp823iEyh_BRjbFBzW7YQVY425P8n3dcNb1CUFdSs2yJnEF6OGHGLuvcLplGRyU2IGitT-QW_juBIcAupzbTTA",
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
