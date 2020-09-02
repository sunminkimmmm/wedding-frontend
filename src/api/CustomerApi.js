/**
 * 고객관리 API
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
    const url = `${backend_url_local}/customers`;
    return $http.get(url);
  },

  /**
   *
   */
  findOne: id => {
    const url = `${backend_url_local}/customers/${id}`;
    return $http.get(url);
  },

  /**
   * 예식 고객 생성
   */
  createWedding: async data => {
    const url = `${backend_url_local}/customers/wedding`;
    return $http.post(url, data);
  },

  /**
   * 직원삭제
   */
  toggleIsUsed: id => {
    const url = `${backend_url_local}/customers/${id}`;
    return $http.put(url);
  },

  /**
   * 직원삭제
   */
  remove: id => {
    const url = `${backend_url_local}/customers/${id}`;
    return $http.delete(url);
  }
}; // end
