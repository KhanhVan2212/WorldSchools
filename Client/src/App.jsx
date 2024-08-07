import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingerProduct from "./components/SingleProduct/SingerProduct";
import Homepage from "./components/HomePage/Homepage";
import RegisterUser from "./components/RegisterUser/RegisterUser";
import LoginUser from "./components/LoginUser/LoginUser";
import DashBoard from "./pages/DashBoard/DashBoard";
import Charts from "./components/Admin/Charts/Charts";
import ProductsList from "./components/Admin/AdminProduct/ProductsList";
import CreateProduct from "./components/Admin/AdminProduct/CreateProduct";
import UserList from "./components/Admin/User/UserList";
import CategoryList from "./components/Admin/Category/CategoryList";
import UpdateProduct from "./components/Admin/AdminProduct/UpdateProduct";
import UserAdd from "./components/Admin/User/UserAdd";
import UserUpdatee from "./components/Admin/User/UserUpdate";
import CreateCategory from "./components/Admin/Category/CreateCategory";
import UpdateCategoryy from "./components/Admin/Category/UpdateCategoryy";
import ProtectedRoutes from "./hooks/ProtectedRoutes";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/detail/:id" element={<SingerProduct />} />
            <Route path="/register" element={<RegisterUser />} />
            <Route path="/login" element={<LoginUser />} />
            <Route
              path="/admin"
              element={
                <ProtectedRoutes>
                  <DashBoard />
                </ProtectedRoutes>
              }
            >
              <Route path="dashboard" element={<Charts />} />
              <Route path="products" element={<ProductsList />} />
              <Route path="product/add" element={<CreateProduct />} />
              <Route path="product/update/:id" element={<UpdateProduct />} />
              <Route path="users" element={<UserList />} />
              <Route path="users/add" element={<UserAdd />} />
              <Route path="users/update/:id" element={<UserUpdatee />} />
              <Route path="category" element={<CategoryList />} />
              <Route path="category/add" element={<CreateCategory />} />
              <Route path="category/update/:id" element={<UpdateCategoryy />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
