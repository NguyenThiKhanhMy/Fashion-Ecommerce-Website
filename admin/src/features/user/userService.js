import axios from "axios";
import { base_url } from "../../utils/baseUrl";

const loginAdminService = async (user) => {
  const response = await axios.post(`${base_url}/user/login-admin`, user);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

const userService = {
  loginAdminService,
};

export default userService;