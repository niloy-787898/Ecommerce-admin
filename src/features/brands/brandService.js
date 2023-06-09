import axios from "axios";
import { base_url } from "../../utils/baseUrl";
import { config } from "../../utils/axiosConfig";

const getBrands = async () => {
  const response = await axios.get(`${base_url}brand/`);

  return response.data;
};

const createBrand = async (brand) => {
  const response = await axios.post(`${base_url}brand/`, brand, config);

  return response.data;
};

const brandService = {
    getBrands,
    createBrand
};

export default brandService;