import { UserModel } from "@/model/User";
import axios from "axios";
import api from "./api";

export type FindUserByIdResponse = {
  data: UserModel;
  status: number;
};

export default function deleteUserById(
  id: string
): Promise<FindUserByIdResponse> {
  const result = api
    .delete<UserModel>(`/user/delete/${id}`)
    .then((response) => {
      return { data: response.data, status: response.status };
    })
    .catch((error) => {
      if (axios.isAxiosError(error)) {
        console.error("error message: ", error.message);
        return {} as FindUserByIdResponse;
      } else {
        console.error("unexpected error: ", error);
        return {} as FindUserByIdResponse;
      }
    });

  return result;
}
