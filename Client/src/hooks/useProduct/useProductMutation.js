import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ProductCreate, ProductDelete, ProductUpdate } from "../../services/product";



const useProductMutation = ({ action }) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const form = useForm();

  const { mutate, ...rest } = useMutation({
    mutationFn: async (product) => {
      switch (action) {
        case "CREATE":
          return await ProductCreate(product);
          
        case "DELETE":
          return await ProductDelete(product.id);
        case "UPDATE":
          return await ProductUpdate(product);
        default:
          return null;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["PRODUCT_KEY"],
      });
    },
    onError: (error) => {
      console.log(error);
    },
  });
  const onSubmit = async (product) => {
    mutate(product);
    navigate("/admin/products");
  };

  return { mutate, form, onSubmit, ...rest };
};

export default useProductMutation;
