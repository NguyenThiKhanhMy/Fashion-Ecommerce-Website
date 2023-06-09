import axios from "axios";
import { base_url } from "../../utils/baseUrl";
import { config } from "../../utils/axiosconfig";

const getBlogs = async () => {
  const response = await axios.get(`${base_url}/blog/`);
  if(response.data) {
    return response.data;
  }
};
const getBlog = async (id) => {
  const response = await axios.get(`${base_url}/blog/${id}`, config);
  if(response.data) {
    return response.data;
  }
};

const blogService = {
  getBlogs,
  getBlog,
};

export default blogService;