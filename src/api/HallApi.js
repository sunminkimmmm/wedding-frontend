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
  findAll: (scheduleCount = false) => {
    let url = `${backend_url_local}/halls`;
    if (scheduleCount) {
      url += `?schedule=true`;
    }
    return $http.get(url);
  },

  /**
   * 상세조회
   */
  findOne: (id, schedule = false) => {
    let url = `${backend_url_local}/halls/${id}`;
    if (schedule) {
      url += `?schedule=true`;
    }
    return $http.get(url);
  },

  /**
   * 생성
   */
  create: async data => {
    const url = `${backend_url_local}/halls`;
    return $http.post(url, data);
  },

  /**
   * Remove
   */
  remove: id => {
    const url = `${backend_url_local}/halls/${id}`;
    return $http.delete(url);
  }
}; // end
