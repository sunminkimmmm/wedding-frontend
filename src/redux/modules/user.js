//#region Action types

// 지정한 숫자만큼 더하기
const ADD_NUMBER = "ADD_NUMBER";

//#endregion Action types

// initial state
const initialState = {
  number: 0
};

// reducer
function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_NUMBER:
      return applyAddNumber(state, action);
    default:
      return state;
  }
}

//#region addNumber : 지정한 숫자만큼 더하기

function addNumber(number) {
  return dispatch => {
    dispatch({
      type: ADD_NUMBER,
      number
    });
  };
}

function applyAddNumber(state, action) {
  const { number } = action;
  return {
    ...state,
    number
  };
}

//#endregion addNumber

// Export Actions
export const actionCreators = {
  addNumber
};

// Export Reducer
export default reducer;
