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
    const url = `${backend_url_local}/employees`;
    return $http.get(url);
  },

  /**
   *
   */
  findOne: id => {
    const url = `${backend_url_local}/employees/${id}`;
    return $http.get(url);
  },

  /**
   * 생성
   */
  create: async data => {
    const url = `${backend_url_local}/employees`;
    return $http.post(url, data);
  },

  /**
   * 직원삭제
   */
  toggleIsUsed: id => {
    const url = `${backend_url_local}/employees/${id}`;
    return $http.put(url);
  },

  /**
   * 직원삭제
   */
  remove: id => {
    const url = `${backend_url_local}/employees/${id}`;
    return $http.delete(url);
  }
}; // end
