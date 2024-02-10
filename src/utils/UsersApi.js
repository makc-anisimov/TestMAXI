import { MAIN_URL } from "./const";

class UsersApi {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
  }
  _getResponseData(res) {
    if (!res.ok) { return Promise.reject(res.status); }
    return res.json();
  }
  getUsers() {
    return fetch(this._baseUrl, {
    }).then(this._getResponseData);
  };
}

export const usersApi = new UsersApi({
  baseUrl: `${MAIN_URL}`,
  });