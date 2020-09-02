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
  findAll: (date, hallId = null) => {
    let url = `${backend_url_local}/schedules/${date}`;
    if (hallId) {
      url += `?hallId=${hallId}`;
    }
    return $http.get(url);
  }
}; // end
