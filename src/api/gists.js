import { request } from "./request";

export const getPublicGistsApi = (page = 1) => {
  return request.get(`/gists/public?page=${page}`);
};

// @TODO  написать редюсер
export const getPublicGistsApiName = (name = "anna") => {
  return request.get(`/users/${name}/gists`);
};
