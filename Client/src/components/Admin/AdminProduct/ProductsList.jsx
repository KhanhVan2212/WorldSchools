import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import useProductQuery from "../../../hooks/useProduct/useProductQuery";
import useProductMutation from "../../../hooks/useProduct/useProductMutation";

const AdminProducts = () => {
  const { data, isLoading, isError } = useProductQuery();
  const { mutate } = useProductMutation({
    action: "DELETE",
  });
  const [searchTerm, setSearchTerm] = useState("");
  
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = data?.filter(
    (product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.poster.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Lỗi rồi</div>;
  return (
    <div>
      <div className="flex mt-3 justify-between">
        <h1 className=" font-semibold text-2xl">List Product</h1>
        <NavLink
          className="px-4 py-2 border rounded text-white bg-blue-600 border-solid hover:bg-blue-700"
          to={"/admin/product/add"}
        >
          <strong>+ Add Product</strong>
        </NavLink>
      </div>
      <div className="w-[300px]">
        <input
          id="search"
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search products..."
          className="mt-3 block rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
        />
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
                Category
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Image
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Description
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Action
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {filteredProducts?.map((product, index) => {
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
                    {product.category}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      <img src={product.image} alt="" width={150} />
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      {product.description}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      <Link to={`/admin/product/update/${product._id}`}>
                        <button
                          type="button"
                          className="mr-3 text-[15px] bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded 
                   focus:outline-none focus:shadow-outline"
                        >
                          {" "}
                          Edit{" "}
                        </button>
                      </Link>

                      <button
                        type="button"
                        className="btn_delete text-[15px] bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded 
               focus:outline-none focus:shadow-outline"
                        onClick={() => {
                          mutate(product);
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminProducts;
