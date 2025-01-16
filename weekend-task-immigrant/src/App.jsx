import { HelmetProvider } from "react-helmet-async";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Immigration from "./pages/Immigration";
import DetailPage from "./pages/DetailPage";
import MainLayout from "./layout/MainLayout";
import AdminLayout from "./layout/AdminLayout";
import AddProduct from "./pages/AddProduct";

function App() {
  return (
    <>
      <HelmetProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="immigration" element={<Immigration />} />
              <Route path="detail/:id" element={<DetailPage />} />
            </Route>
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<Home />} />
              <Route path="addProduct" element={<AddProduct />} />
            </Route>
            <Route path="*" element={<h2>No Page</h2>} />
          </Routes>
        </BrowserRouter>
      </HelmetProvider>
    </>
  );
}

export default App;
