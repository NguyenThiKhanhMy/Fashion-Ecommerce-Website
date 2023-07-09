import axios from "axios";
import { base_url } from "../../utils/baseUrl";
import { config } from "../../utils/axiosconfig";

const getProducts = async () => {
  const response = await axios.get(`${base_url}/product/`);
  if(response.data) {
    return response.data;
  }
};
const getProduct = async (id) => {
  const response = await axios.get(`${base_url}/product/${id}`, config);
  if(response.data) {
    return response.data;
  }
};

const addToWishlist = async (proId) => {
  const response = await axios.put(`${base_url}/product/wishlist`, {proId} );
  if(response.data) {
    return response.data;
  }
};

const productService = {
  getProducts,
  getProduct,
  addToWishlist,
};

export default productService;