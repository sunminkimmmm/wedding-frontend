/**
 *
 */

export default class ApiManager {
  /**
   *
   */
  constructor() {
    if (!ApiManager.instance) {
      // 싱글톤 변수 할당
      ApiManager.instance = this;
    }
    return ApiManager.instance;
  }

  /**
   *
   */
  setHeaders = (headers = {}) => {
    this.headers = {
      ...this.headers,
      headers
    };
  };

  /**
   *
   */
  getHeaders = () => {
    if (this.headers) {
      return this.headers;
    }
    this.headers = {
      Authorization: `Bearer 123`
    };
    return this.headers;
  };

  /**
   * 메뉴,부대품목, 식음료, 홀 조회
   */
  get = async url => {
    try {
      const headers = this.getHeaders();
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      });
      const responseJson = await response.json();

      return responseJson;
    } catch (error) {
      return {
        code: 500,
        message: error
      };
    }
  };


  /**
   * 메뉴 삽입
   */
  post = async (url, body = {}) => {
    try {
      const headers = this.getHeaders();
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body:
          JSON.stringify({
            adultCharge: body[2],
            childCharge: body[3],
            eventClassification: body[0],
            menuName: body[1],
            memo: body[4],


          })
      });
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      return {
        code: 500,
        message: error
      };
    }
  };

  /**
   * 부대품목 삽입
   */
  itemPost = async (url, body = {}) => {
    try {
      const headers = this.getHeaders();
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body:
          JSON.stringify({
            itemClassifications_ID: body[2],
            itemName: body[0],
            memo: body[3],
            price: body[1]


          })
      });
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      return {
        code: 500,
        message: error
      };
    }
  };

  /**
  * 부대품목 분류 삽입
  */
  itemClassifyPost = async (url, body = {}) => {
    try {
      const headers = this.getHeaders();
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body:
          JSON.stringify({
            eventClassification: body[0],
            itemClassificationName: body[1],
            order: body[2],
            useStatus: body[3]
          })
      });
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      return {
        code: 500,
        message: error
      };
    }
  };

  /**
  * 식음료 삽입
  */
  foodPost = async (url, body = {}) => {
    try {
      const headers = this.getHeaders();
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body:
          JSON.stringify({
            fnBClassifications_ID: body[2],
            itemName: body[0],
            memo: body[3],
            price: body[1]
          })
      });
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      return {
        code: 500,
        message: error
      };
    }
  };

  /**
  * 홀 삽입
  */
  hallPost = async (url, body = {}) => {
    try {
      const headers = this.getHeaders();
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body:
          JSON.stringify({
            hallClassification: body[1],
            hallName: body[2],
            order: body[0]
          })
      });
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      return {
        code: 500,
        message: error
      };
    }
  };

  /**
   * 메뉴 수정
   */
  put = async (url, body = {}) => {
    try {
      const headers = this.getHeaders();
      const response = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body:
          JSON.stringify({
            adultCharge: body[2],
            childCharge: body[3],
            eventClassification: body[0],
            memo: body[4],
            menuName: body[1]
          })
      });
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      return {
        code: 500,
        message: error
      };
    }
  };

  /**
   * 부대품목 수정
   */
  itemPut = async (url, body = {}) => {
    try {
      const headers = this.getHeaders();
      const response = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body:
          JSON.stringify({
            itemClassifications_ID: body[2],
            itemName: body[0],
            memo: body[3],
            price: body[1]
          })
      });
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      return {
        code: 500,
        message: error
      };
    }
  };

  /**
 * 부대품목 분류 수정
 */
  itemClassifyPut = async (url, body = {}) => {
    try {
      const headers = this.getHeaders();
      const response = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body:
          JSON.stringify({
            eventClassification: body[0],
            itemClassificationName: body[1],
            order: body[2],
            useStatus: body[3]
          })
      });
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      return {
        code: 500,
        message: error
      };
    }
  };

  /**
   * 식음료 수정
   */
  foodPut = async (url, body = {}) => {
    try {
      const headers = this.getHeaders();
      const response = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body:
          JSON.stringify({
            fnBClassifications_ID: body[2],
            itemName: body[0],
            memo: body[3],
            price: body[1]
          })
      });
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      return {
        code: 500,
        message: error
      };
    }
  };

  /**
   * 홀 수정
   */
  hallPut = async (url, body = {}) => {
    try {
      const headers = this.getHeaders();
      const response = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body:
          JSON.stringify({
            hallClassification: body[1],
            hallName: body[2],
            order: body[0]
          })
      });
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      return {
        code: 500,
        message: error
      };
    }
  };

  /**
   * 메뉴, 부대품목, 식음료, 홀 삭제
   */
  delete = async url => {
    try {
      const headers = this.getHeaders();
      const response = await fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        },
      });
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      return {
        code: 500,
        message: error
      };
    }
  };
}
