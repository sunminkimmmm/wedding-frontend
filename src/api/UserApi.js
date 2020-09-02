/**
 * Post API
 *
 */
import { backend_url_local } from "../Utils";
import { ApiManager } from "../Utils";
const $http = new ApiManager();

export default {
  /**
   * 로그인
   */
  login: async (account, password) => {
    const url = `${backend_url_local}/users/login`;
    return $http.post(url, { account, password });
  },

  /**
   * 로그아웃
   */
  logout: async () => {
    const url = `${backend_url_local}/users/logout`;
    return $http.get(url);
  },

  /**
   * SEssion
   */
  session: () => {
    const url = `${backend_url_local}/users/session`;
    return $http.get(url);
  }
}; // end
