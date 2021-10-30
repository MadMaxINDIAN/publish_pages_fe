import axios from "axios";
import { REGISTER_SUCCESS } from "./type";
import { registerUserApi } from "../apis/user";

export const registerUser = (data) => { return registerUserApi(data)};