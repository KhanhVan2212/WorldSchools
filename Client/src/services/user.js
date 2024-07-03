import { toast } from "react-toastify";
import { instance } from "../config/axios";

export const getAllUsers = async (params) => {
  try {
    const response = await instance.get("/users", { params });
    return response.data;
  } catch (error) {
    return [];
  }
};
export const getUserById = async (id) => {
  try {
    const response = await instance.get(`/users/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const UserCreate = async (user) => {
  try {
    const response = await instance.post("/users", user);
    toast.success("Add successfully");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const UserUpdate = async (user) => {
  try {
    const response = await instance.put(`/users/${user._id}`, user);
    alert("Update successfully");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const UserDelete = async (id) => {
  const confirm = window.confirm("Are you sure you want to delete ");
  try {
    if (confirm) {
      const response = await instance.delete(`/users/${id}`);
      toast.success("Delete successfully");
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
};
