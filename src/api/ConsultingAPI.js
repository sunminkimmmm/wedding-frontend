/**
 * Post API
 *
 */
import { backend_url_local } from '../Utils';
import { ApiManager } from '../Utils';
const $http = new ApiManager();

export default {
  /**
   *
   */
  findAll: async () => {
    const url = `${backend_url_local}/consulting/`;
    return $http.get(url);
  },

  /**
   * 전체조회
   */
  find: async () => {
    try {
      const url = `${backend_url_local}/posts`;
      const response = await fetch(url);
      const responseJson = response.json();
      return responseJson;
    } catch (e) {
      return e;
    }
  },

  /**
   * 상담고객 등록
   */
  create: async params => {
    const url = `${backend_url_local}/consulting/user`;
    return $http.post(url, params);
  }
}; // end
