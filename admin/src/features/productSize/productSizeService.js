import axios from "axios";
import { base_url } from "../../utils/baseUrl";
import { config } from "../../utils/axiosconfig";

const getProductSizes = async () => {
  const response = await axios.get(`${base_url}/productsize/`);

  return response.data;
};
const createSize = async (size) => {
  const response = await axios.post(`${base_url}/productsize/`, size, config);

  return response.data;
};

const getProductSize = async (id) => {
  const response = await axios.get(`${base_url}/productsize/${id}`, config);

  return response.data;
};

const deleteProductSize = async (id) => {
  const response = await axios.delete(`${base_url}/productsize/${id}`, config);

  return response.data;
};
const updateProductSize = async (size) => {
  console.log(size);
  const response = await axios.put(
    `${base_url}/productsize/${size.id}`,
    { title: size.pSizeData.title },
    config
  );

  return response.data;
};
const pSizeService = {
  getProductSizes,
  createSize,
  getProductSize,
  deleteProductSize,
  updateProductSize,
};

export default pSizeService;