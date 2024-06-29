
import React from "react";
import { Link, NavLink } from "react-router-dom";
import useProductQuery from "../../../hooks/useProduct/useProductQuery";
import useProductMutation from "../../../hooks/useProduct/useProductMutation";

const AdminProducts = () => {
  
  const {data , isLoading , isError} = useProductQuery();
  console.log(data);
  const { mutate } = useProductMutation({
    action: "DELETE",
});
if (isLoading) return <div>Loading...</div>;
if (isError) return <div>Lỗi rồi</div>;
  return (
    <div>
      <div className="flex mt-3 justify-between">
        <h1 className=" font-semibold text-2xl">List Product</h1>
        <NavLink className="px-4 py-2 border rounded text-white bg-blue-600 border-solid hover:bg-blue-700" to={"/admin/product/add"}>
          <strong >+ Add Product</strong>
        </NavLink>
      </div>
      <div className="overflow-x-auto mt-3">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <thead className="ltr:text-left rtl:text-right">
            <tr>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Title
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Poster
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Image
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Description
              </th >
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Action
              </th >
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {data?.map((product,index)=>{
              return (
                <>
                <tr key={index}>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                {product.title}
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                {product.poster}
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                <img src={product.image} alt="" width={150} />
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                {product.description}
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
              <Link
                    to={`/admin/product/update/${product._id}`}
                    
                   
                  >
                    <button  type="button"
                    className="mr-3 text-[15px] bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded 
                   focus:outline-none focus:shadow-outline">
                    {" "}
                    Edit{" "}
                    </button>
                  </Link>
                  
                  <button
                    type="button"
                    className="btn_delete text-[15px] bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded 
               focus:outline-none focus:shadow-outline"
                    onClick={() =>{
                     mutate(product)
                    }
                      }
                        
                  >
                    Delete
                  </button>
              </td>
            </tr>
                </>
              )
            })}
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminProducts;
