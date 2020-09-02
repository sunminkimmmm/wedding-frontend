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
   * 조회
   */
  findAll: async () => {
    const url = `${backend_url_dev}/halls`;
    return $http.get(url);
  },

  /**
   * 생성
   */
  create: async data => {
    const url = `${backend_url_dev}/halls`;
    return $http.hallPost(url, data);
  },
  /**
    * 수정
    */
  update: async (id, data) => {
    const url = `${backend_url_dev}/halls/${id}`;
    return $http.hallPut(url, data);
  },

  /**
   * 삭제
   */
  remove: id => {
    const url = `${backend_url_dev}/halls/${id}`;
    return $http.delete(url);
  }
}; // end
