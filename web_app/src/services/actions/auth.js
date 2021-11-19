import axios from "axios";
import { REGISTER_SUCCESS } from "./type";
import { registerUserApi, checkUserApi } from "../apis/user";

export const registerUser = (data) => {
  return registerUserApi(data);
};

export const checkUser = (user) => {
  return checkUserApi(user);
};
