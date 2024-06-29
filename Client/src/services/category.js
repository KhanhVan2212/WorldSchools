import { instance } from "../config/axios";


export const getAllCategories = async (params) => {
  try {
      const response = await instance.get('/categories', { params })
      return response.data
  } catch (error) {
      return []
  }
}
export const getCategoryById = async (id) => {
  try {
      const response = await instance.get(`/categories/${id}`)
      return response.data
  } catch (error) {
      console.log(error)
  }
}
export const CategoryAdd = async (category) => {
  try {
    const response = await instance.post("/categories", category);
    alert(" Add successfully");
    return response.data;
    
  } catch (error) {
    console.log(error);
  }
};
export const CategoryUpdate = async (category) => {
  try {
    const response = await instance.put(`/categories/${category._id}`, category);
    alert(" Update successfully");
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
      alert(" Delete successfully");
      return response.data;
    }
  } catch (error) { 
    console.log(error);
  }
};
