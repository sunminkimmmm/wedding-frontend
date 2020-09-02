/**
 * Post API
 *
 */
import { backend_url_local, backend_url_dev } from '../Utils';
// import { backend_url_dev } from "../../../Utils";
import { ApiManager } from '../Utils';
const $http = new ApiManager();


export default {
  /**
   *
   */
  findAll: async () => {
    const url = `${backend_url_dev}/menu`;
    return $http.get(url);
  },

  /**
   * 생성
   */
  create: async data => {
    const url = `${backend_url_dev}/menu`;
    return $http.post(url, data);
  },
  /**
    * 수정
    */
  update: async (id, data) => {
    const url = `${backend_url_dev}/menu/${id}`;
    return $http.put(url, data);
  },

  /**
   * 삭제
   */
  remove: id => {
    const url = `${backend_url_dev}/menu/${id}`;
    return $http.delete(url);
  }
}; // end
