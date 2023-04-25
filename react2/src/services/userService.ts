import { API_URL } from "../consts/consts";
import { UserModel } from "../models/userModel";

export class UserService {
  static getUserById = async (id: number): Promise<UserModel> => {
    const response = await fetch(`${API_URL}/user/${id}`).catch(() => { console.log('badFetch') });

    return (response?.ok ?? false) ? await response?.json() : {};
  }
}