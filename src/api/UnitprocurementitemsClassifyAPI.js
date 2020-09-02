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
    const url = `${backend_url_dev}/itemclassifications`;
    return $http.get(url);
  },

  /**
   * 생성
   */
  create: async data => {
    const url = `${backend_url_dev}/itemclassifications`;
    return $http.itemClassifyPost(url, data);
  },
  /**
    * 수정
    */
  update: async (id, data) => {
    const url = `${backend_url_dev}/itemclassifications/${id}`;
    return $http.itemClassifyPut(url, data);
  },

  /**
   * 삭제
   */
  remove: id => {
    const url = `${backend_url_dev}/itemclassifications/${id}`;
    return $http.delete(url);
  }
}; // end
