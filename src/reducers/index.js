import {
  FETCH_SMURF_START,
  FETCH_SMURF_SUCCESS,
  ADD_SMURF,
  FETCH_SMURF_FAIL,
} from "../actions";

export const initialState = {
  smurfs: [],
  isFetching: false,
  errorMessage: "",
};

const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SMURF_START:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        isFetching: false,
      };
    case FETCH_SMURF_FAIL:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    case ADD_SMURF:
      return {
        ...state,
        smurfs: action.payload,
        errorMessage: "",
        isFetching: false,
      };
    case "ERROR":
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default smurfReducer;

//Task List:
//1. Add in the initialState needed to hold:
//      - an array of smurfs
//      - a boolean indicating if the app is loading
//      - error text
//2. Setup your reducer to take the state and action as peremeters
//3. Add in cases to your reducer to handle:
//      - The start of an api call
//      - The end of an api call
//      - The adding a smurf to the smurf list when added into payload
//      - Setting Error Text
//      - Any other state changes you see as necessary
