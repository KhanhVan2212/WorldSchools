import { instance } from "../config/axios";

export const Register = async (user) => {
    try {
      const response = await instance.post("/register", user);
      alert("Register successfully");
      return response.data;
      
    } catch (error) {
      console.log(error);
    }
  };