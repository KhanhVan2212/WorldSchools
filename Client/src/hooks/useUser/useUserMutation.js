import { useMutation, useQueryClient } from "@tanstack/react-query";
import {  useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { UserCreate, UserDelete, UserUpdate } from "../../services/user";



const useUserMutation = ({ action }) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const form = useForm();

  const { mutate, ...rest } = useMutation({
    mutationFn: async (user) => {
      switch (action) {
        case "CREATE":
          return await UserCreate(user);
        case "DELETE":
            return await UserDelete(user._id);
        case "UPDATE":
          return await UserUpdate(user);
        default:
          return null;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["USER_KEY"],
      });
    },
    onError: (error) => {
      console.log(error);
    },
  });
  const onSubmit = async (user) => {
    mutate(user);
    navigate("/admin/user");
  };

  return { mutate, form, onSubmit, ...rest };
};

export default useUserMutation;
