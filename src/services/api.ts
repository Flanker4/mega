const API_ROOT = "https://conduit.productionready.io/api";
let token: string;

const requests = {
  get: (url: string) => fetch(`${API_ROOT}${url}`),
  post: (url: string, body: any) => {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    if (token) {
      headers.append("authorization", token);
    }
    return fetch(`${API_ROOT}${url}`, {
      method: "POST",
      body: JSON.stringify(body),
      headers
    }).then(response => {
      if (response.status != 200) {
        return response.json().then(json => {
          throw json;
        });
      }
      return response.json();
    });
  }
};

const Auth = {
  register: (username: string, email: string, password: string) =>
    requests.post("/users", { user: { username, email, password } })
};

export default {
  Auth
};
