import React from "react";
import { Link, NavLink } from "react-router-dom";
import useUserQuery from "../../../hooks/useUser/useUserQuery";
import useUserMutation from "../../../hooks/useUser/useUserMutation";

const UserList = () => {
  const { data, isLoading, isError } = useUserQuery();
  console.log(data);
  const { mutate } = useUserMutation({
    action: "DELETE",
  });
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Lỗi rồi</div>;
  return (
    <div>
      <div className="flex mt-3 justify-between">
        <h1 className=" font-semibold text-2xl">Manager User</h1>
        <NavLink
          className="px-4 py-2 border rounded text-white bg-blue-600 border-solid hover:bg-blue-700"
          to={"/admin/users/add"}
        >
          <strong>+ Add User</strong>
        </NavLink>
      </div>
      <div className="overflow-x-auto mt-3">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <thead className="ltr:text-left rtl:text-right">
            <tr>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                STT
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Name
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Email
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Role
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Action
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {data?.map((product, index) => {
              return (
                <tr key={index}>
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    {index + 1}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    {product.name}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    {product?.email}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    {product.role}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    {/* <Link to={`/admin/users/update/${product._id}`}>
                      <button
                        type="button"
                        className="mr-3 text-[15px] bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded 
                   focus:outline-none focus:shadow-outline"
                      >
                        {" "}
                        Edit{" "}
                      </button>
                    </Link> */}

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
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;
