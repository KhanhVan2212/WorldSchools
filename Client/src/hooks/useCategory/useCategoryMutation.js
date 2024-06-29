import { useMutation, useQueryClient } from "@tanstack/react-query";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { CategoryAdd, CategoryDelete, CategoryUpdate } from "../../services/category";


const useCategoryMutation = ({ action }) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const form = useForm();

  const { mutate, ...rest } = useMutation({
    mutationFn: async (category) => {
      switch (action) {
        case "CREATE":
          return await CategoryAdd(category);
        case "DELETE":
          console.log(category.id);
          return await CategoryDelete(category.id);
        case "UPDATE":
          return await CategoryUpdate(category);
        default:
          return null;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["CATEGORY_KEY"],
      });
    },
    onError: (error) => {
      console.log(error);
    },
  });
  const onSubmit = async (category) => {
    mutate(category);
    navigate("/admin/category");
  };

  return { mutate, form, onSubmit, ...rest };
};

export default useCategoryMutation;
