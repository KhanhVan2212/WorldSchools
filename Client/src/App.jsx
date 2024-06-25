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


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/product" element={<SingerProduct />} />
          <Route path="/register" element={<RegisterUser />} />
          <Route path="/login" element={<LoginUser />} />
          <Route path="/admin" element={<DashBoard />}>
            <Route path="dashboard" element={<Charts />} />
            <Route path="product" element={<ProductsList />} />
            <Route path="product/createproduct" element={<CreateProduct />} />
            <Route path="user" element={<UserList />} />
            <Route path="category" element={<CategoryList />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
