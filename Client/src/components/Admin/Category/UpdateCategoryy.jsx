import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { CategoryUpdate, getCategoryById } from "../../../services/category";

const UpdateCategoryy = () => {
    const queryClient = useQueryClient();
    const { id } = useParams();
    const {register , handleSubmit ,formState: {errors} , reset} = useForm();
    const navigate = useNavigate();
    const {data} = useQuery({
      queryKey: ['CATEGORY_KEY', id],
      queryFn: async () => {
        return  await getCategoryById(id) 
    }
    })
    const {mutate} = useMutation({
      mutationFn: async(category) => {
       const form =  await CategoryUpdate(category);
       return form;
      },
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ["CATEGORY_KEY"],
        });
      },
      onError: (error) => {
        console.error('Failed to add product:', error);
     },
    });
    const onSubmit = async (category) => {
      console.log(category);
      mutate(category);
      navigate("/admin/category");
  };
      // fill nội dung vào form
      useEffect(() => {
        data && reset(data);
    }, [id, reset, data]);
  return (
      <>
      <form onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
            id="add-form">
      <div className="min-h-screen p-6 z-40 flex items-center justify-center ml-12">
      <div className="container max-w-screen-lg mx-auto">
        <div>
          <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
              <div className="text-gray-600">
                <p className="font-medium text-lg">Update Category</p>
                <p>Please fill out all the fields.</p>
              </div>
              
              <div className="lg:col-span-2">
                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                <div className="md:col-span-5">
                    <label htmlFor="email">Name</label>
                    <input
                      type="text"
                      {...register("name")}
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    />
                  </div>
                  <div className="md:col-span-5 text-right">
                    <div className="inline-flex items-end">
                      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      </form>
      </> 
  );
};

export default UpdateCategoryy;
