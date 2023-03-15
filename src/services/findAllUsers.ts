import { UserModel } from "@/model/User";
import axios from "axios";
import api from "./api";

export default function findAllUsers(): Promise<UserModel[]> {
  const result = api
    .get<UserModel[]>("/users")
    .then((response) => response.data)
    .catch((error) => {
      if (axios.isAxiosError(error)) {
        console.error("error message: ", error.message);
        return [];
      } else {
        console.error("unexpected error: ", error);
        return [];
      }
    });

  return result;
}
