import { async } from "q";

const API_ROOT = "https://conduit.productionready.io/api";
let token: string;

const requests = {
  get: (url: string) => fetch(`${API_ROOT}${url}`),
  post: async (url: string, body: any) => {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    if (token) {
      headers.append("authorization", token);
    }
    const response = await fetch(`${API_ROOT}${url}`, {
      method: "POST",
      body: JSON.stringify(body),
      headers
    });
    const responseJson = await response.json();
    if (response.status != 200) {
      throw responseJson;
    }
    return responseJson;
  }
};

const Auth = {
  register: (username: string, email: string, password: string) =>
    requests.post("/users", { user: { username, email, password } }),
  login: (email: string, password: string) =>
    requests.post("/users/login", { user: { email, password } })
};

export default {
  Auth
};
