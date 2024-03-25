import { atom } from "recoil";

const isAuthState = atom({
  key: "isAuthenticated",
  default: false,
});
export default isAuthState;
