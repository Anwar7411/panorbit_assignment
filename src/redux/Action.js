import axios from 'axios';
import * as types from './ActionTypes';

//this function for loading Request before getting response
const loadingRequest = () => {
    return {
      type: types.GET_DATA_LOADING
    };
  };

 //this function for success data from api request
  const SuccessRequest = (payload) => {
    return {
      type: types.GET_DATA_SUCCESS,
      payload
    };
  };


  //this function for failure of data for any error from server
const errorRequest = () => {
    return {
      type: types.GET_DATA_FAIL
    };
  };
  
  //this function for calling userData from API
  export const getUserData = () => (dispatch) => {
    dispatch(loadingRequest());
    axios
      .get('https://panorbit.in/api/users.json')
      .then((response) => {
        dispatch(SuccessRequest(response.data.users));
      })
      .catch((error) => {
        console.log('error in user data', error);
        dispatch(errorRequest());
      });
  };
