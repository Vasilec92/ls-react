import {
  GET_GISTS_START,
  GET_GISTS_SUCCESS,
  GET_GISTS_ERROR,
  GET_GISTSNAME_START,
  GET_GISTSNAME_SUCCESS,
  GET_GISTSNAME_ERROR,
} from "./types";

export const getGistsStart = () => ({
  type: GET_GISTS_START,
});

export const getGistsSuccess = (gists) => ({
  type: GET_GISTS_SUCCESS,
  payload: gists,
});

export const getGistsError = (error) => ({
  type: GET_GISTS_ERROR,
  payload: error,
});

export const getGistsNameStart = () => ({
  type: GET_GISTSNAME_START,
});

export const getGistsNameSuccess = (gists) => ({
  type: GET_GISTSNAME_SUCCESS,
  payload: gists,
});

export const getGistsNameError = (error) => ({
  type: GET_GISTSNAME_ERROR,
  payload: error,
});
