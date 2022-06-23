import {
  GET_GISTS_START,
  GET_GISTS_SUCCESS,
  GET_GISTS_ERROR,
  GET_GISTSNAME_START,
  GET_GISTSNAME_SUCCESS,
  GET_GISTSNAME_ERROR,
} from "./types";

const initialState = {
  gists: [],
  error: null,
  pending: false,

  // @TODO  сделать по апи поиска
  gistsName: [],
  errorName: null,
  pendingName: false,
};

export const gistsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GISTS_START:
      return { ...state, pending: true, error: null };
    case GET_GISTS_SUCCESS:
      return { ...state, pending: false, gists: action.payload };
    case GET_GISTS_ERROR:
      return { ...state, pending: false, error: action.payload };
    case GET_GISTSNAME_START:
      return { ...state, pendingName: true, errorName: null };
    case GET_GISTSNAME_SUCCESS:
      return { ...state, pendingName: false, gistsName: action.payload };
    case GET_GISTSNAME_ERROR:
      return { ...state, pendingName: false, errorName: action.payload };
    default:
      return state;
  }
};
