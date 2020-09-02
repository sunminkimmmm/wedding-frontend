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
  findAll: () => {
    const url = `${backend_url_local}/additionalitems`;
    return $http.get(url);
  },

  /**
   *
   */
  categories: () => {
    const url = `${backend_url_local}/additionalitems/categories`;
    return $http.get(url);
  },

  /**
   * 생성
   */
  create: data => {
    const url = `${backend_url_local}/additionalitems`;
    return $http.post(url, data);
  },

  /**
   * 카테고리생성
   */
  createCategory: data => {
    const url = `${backend_url_local}/additionalitems/categories`;
    return $http.post(url, data);
  }
}; // end
