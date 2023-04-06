import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import ResetPassword from './pages/ResetPassword';
import ForgetPassword from './pages/ForgetPassword';
import Dashboard from './pages/Dashboard';
import MainLayout from './components/MainLayout';
import Enquaries from './pages/Enquaries';
import BlogList from './pages/BlogList';
import BlogCatagoryList from './pages/BlogCatagoryList';
import Order from './pages/Order';
import Customers from './pages/Customers';
import ProductList from './pages/ProductList';
import BrandList from './pages/BrandList';
import CatagoryList from './pages/CatagoryList';
import ColorList from './pages/ColorList';


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/reset-password" element={<ResetPassword/>}/>
        <Route path="/forgot-password" element={< ForgetPassword/>} />
        <Route path="/admin" element={< MainLayout/>}>
          <Route index element={< Dashboard/>} />
          <Route path="customers" element={< Customers/>} />
          <Route path="orders" element={< Order/>} />
          <Route path="enquiries" element={< Enquaries/>} />
          <Route path="product-list" element={< ProductList/>} />
          <Route path="brand-list" element={< BrandList/>} />
          <Route path="category-list" element={< CatagoryList/>} />
          <Route path="color-list" element={< ColorList/>} />
          <Route path="blog-list" element={< BlogList/>} />
          <Route path="blog-category-list" element={< BlogCatagoryList/>} />
        </Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
