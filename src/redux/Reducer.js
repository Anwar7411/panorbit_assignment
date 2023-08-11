import * as types from './ActionTypes';

const initialState = {
  userData: [],
  isloading:false,
  isError:false
};

const Reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
  
    case types.GET_DATA_LOADING:
      return {
        ...state,
        isloading:true
      };

    case types.GET_DATA_SUCCESS:
      return {
        ...state,
        userData : payload,
        isloading:false,
        isError:false
      };
    
    case types.GET_DATA_FAIL:
       return {
          ...state,
          isError: true,
          isloading: false
        };

    default: return state;

  }
};

export { Reducer };
