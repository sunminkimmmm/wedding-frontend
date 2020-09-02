/**
 *
 */

export const backend_url_prod = ``;
export const backend_url_dev = `http://192.168.64.145:8080`;
export const backend_url_local = `https://jsonplaceholder.typicode.com`;
export { default as ApiManager } from './ApiManager';

/**
 *
 */
export const momentDateToString = value => {
  const year = value.year();
  const month =
    value.month() + 1 < 10 ? `0${value.month() + 1}` : value.month() + 1;
  const day = value.date() < 10 ? `0${value.date()}` : value.date();

  return `${year}-${month}-${day}`;
};

/**
 * getCookie
 * 쿠키찾기
 */
export const getCookie = (name, options = null) => {
  const value = window.document.cookie.match(
    '(^|;) ?' + name + '=([^;]*)(;|$)'
  );
  return value ? value[2] : null;
};

/**
 * setCookie
 * 쿠키저장
 */
export const setCookie = (name, value, callback = false) => {
  window.document.cookie = `${name}=${value}; path=/`;
  if (callback) callback();
};

/**
 * deleteCookie
 * 쿠키삭제
 */
export const deleteCookie = (name, { path, domain }) => {
  if (getCookie(name)) {
    window.document.cookie =
      name +
      '=' +
      (path ? ';path=' + path : '') +
      (domain ? ';domain=' + domain : '') +
      ';expires=Thu, 01 Jan 1970 00:00:01 GMT';
  }
};

/**
 * Querystring parser
 */
export const querystringParser = url => {
  let result = {};
  let name;
  let value;
  // 쿼리스트링 파싱
  const rawData = url.split('?')[1] ? url.split('?')[1] : url.split('?')[0];
  const params = rawData.split('&');
  params.forEach(param => {
    param = param.split('=');
    name = param[0];
    value = param[1];
    if (name.length)
      if (result[name] !== undefined) {
        if (!result[name].push) {
          result[name] = [result[name]];
        }
        result[name].push(value || '');
      } else {
        result[name] = value || '';
      }
  });
  // alert(result);
  return result;
};
