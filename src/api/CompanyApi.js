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
  findOne: async () => {
    const url = `${backend_url_local}/company`;
    return $http.get(url);
  },

  /**
   *
   */
  getSchedules: async () => {
    const url = `${backend_url_local}/dashboard/events`;
    return $http.get(url);
  }
}; // end
