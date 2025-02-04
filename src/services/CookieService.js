import { axiosInstance } from "../constants/ApiConfig";

export function setJwt(token, remember = null) {
  const savedToken = localStorage.getItem("jwt");

  if (savedToken !== token) {
    if (remember) {
      localStorage.setItem("jwt", token);
    } else {
      sessionStorage.setItem("jwt", token);
    }
  }
}

export function getJwt() {
  const token = sessionStorage.getItem("jwt") || localStorage.getItem("jwt");
  if (token !== null) {
    axiosInstance.defaults.headers.common["Authorization"] = `Token ${token}`;
    return token;
  } else {
    return false;
  }
}

export function removeJwt() {
  localStorage.removeItem("jwt");
  sessionStorage.removeItem("jwt");
  delete axiosInstance.defaults.headers.common["Authorization"];
}
