const API_ROOT = "https://conduit.productionready.io/api";
let token: string | null = null;

const getHeaders = () => {
  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  if (token) {
    headers.append("authorization", token);
  }
  return headers;
};

const processResponse = async (response: Response): Promise<any> => {
  const responseJson = await response.json();
  if (response.status != 200) {
    throw responseJson;
  }
  return responseJson;
};

const requests = {
  get: async (url: string) => {
    const response = await fetch(`${API_ROOT}${url}`, {
      method: "GET",
      headers: getHeaders()
    });
    return await processResponse(response);
  },
  post: async (url: string, body: any) => {
    const response = await fetch(`${API_ROOT}${url}`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: getHeaders()
    });
    return await processResponse(response);
  }
};

const Auth = {
  register: (username: string, email: string, password: string) =>
    requests.post("/users", { user: { username, email, password } }),
  login: (email: string, password: string) =>
    requests.post("/users/login", { user: { email, password } })
};

const Feed = {
  loadPage: (page: number = 0, limit: number = 10) =>
    requests.get(`/articles?limit=${limit}&offset=${page ? page * limit : 0}`)
};

export default {
  Auth,
  Feed,
  setToken: (_token: string | null) => {
    token = _token;
  }
};
