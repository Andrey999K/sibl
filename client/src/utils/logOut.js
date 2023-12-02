import localStorageService from "../services/localStorage.service";

const logOut = () => localStorageService.removeAuthData();

export default logOut;
