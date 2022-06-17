import {
  getGistsStart,
  getGistsSuccess,
  getGistsError,
  getGistsNameStart,
  getGistsNameSuccess,
  getGistsNameError,
} from "./actions";

export const getGists =
  (page = 1) =>
  async (dispatch, _, api) => {
    try {
      dispatch(getGistsStart());

      const { data } = await api.getPublicGistsApi(page);

      dispatch(getGistsSuccess(data));
    } catch (e) {
      dispatch(getGistsError(e));
    }
  };

export const getGistsName = (name) => async (dispatch, _, api) => {
  try {
    dispatch(getGistsNameStart());

    const { data } = await api.getPublicGistsApiName(name);

    dispatch(getGistsNameSuccess(data));
  } catch (e) {
    dispatch(getGistsNameError(e));
  }
};
