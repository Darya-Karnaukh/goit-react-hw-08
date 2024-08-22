import axios from "axios";

export const apiContact = axios.create({
  baseURL: "https://connections-api.goit.global/",
});

export const setToken = (token) => {
  apiContact.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearToken = () => {
  apiContact.defaults.headers.common.Authorization;
};
