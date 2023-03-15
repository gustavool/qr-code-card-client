import axios from "axios";
import { IUserData } from "@/context/UserDataContext";
import { UserModel } from "@/model/User";
import api from "./api";

export default function saveUser(user: IUserData): Promise<UserModel> {
  const result = api
    .post<UserModel>("/user/save", user)
    .then((response) => response.data)
    .catch((error) => {
      if (axios.isAxiosError(error)) {
        console.error("error message: ", error.message);
        return {} as UserModel;
      } else {
        console.error("unexpected error: ", error);
        return {} as UserModel;
      }
    });

  return result;
}
