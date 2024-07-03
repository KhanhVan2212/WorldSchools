import { instance } from "../config/axios";
import { toast } from "react-toastify";

export const getAllCategories = async (params) => {
  try {
    const response = await instance.get("/categories", { params });
    return response.data;
  } catch (error) {
    return [];
  }
};
export const getCategoryById = async (id) => {
  try {
    const response = await instance.get(`/categories/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const CategoryAdd = async (category) => {
  try {
    const response = await instance.post("/categories", category);
    toast.success(" Add Category successfully");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const CategoryUpdate = async (category) => {
  try {
    const response = await instance.put(
      `/categories/${category._id}`,
      category
    );
    toast.success(" Update successfully");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const CategoryDelete = async (id) => {
  const confirm = window.confirm("Are you sure you want to delete ");
  try {
    if (confirm) {
      const response = await instance.delete(`/categories/${id}`);
      toast.success(" Delete successfully");
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
};
