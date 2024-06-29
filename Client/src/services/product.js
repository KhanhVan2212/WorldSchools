import axios from "axios";
import { instance } from "../config/axios";

export const getAllProducts = async (params) => {
  try {
      const response = await instance.get('/products', { params })
      return response.data
  } catch (error) {
      return []
  }
}
export const getProductById = async (id) => {
  try {
      const response = await instance.get(`/products/${id}`)
      return response.data
  } catch (error) {
      console.log(error)
  }
}
export const ProductCreate = async (product) => {
  try {
    const response = await axios.post("http://localhost:8080/products", product)
    alert("Product Add successfully");
    return response.data;
    
  } catch (error) {
    console.log(error);
  }
};
export const ProductUpdate = async (product) => {
  try {
    const response = await instance.put(`/products/${product._id}`, product);
    alert("Product Update successfully");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const ProductDelete = async (id) => {
  const confirm = window.confirm("Are you sure you want to delete ");
  try {
    if (confirm) {
      const response = await instance.delete(`/products/${id}`);
      alert("Product Delete successfully");
      return response.data;
    }
  } catch (error) { 
    console.log(error);
  }
};
