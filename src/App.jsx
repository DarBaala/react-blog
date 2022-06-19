import { Routes, Route } from "react-router-dom";
import "./scss/app.scss";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Posting from "./pages/Posting";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";
import Login from "./pages/Login";

import { useEffect } from "react";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { fetchNews } from "./redux/slices/blogSlice";
import { Admin } from "./pages/Admin";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/posting" element={<Posting />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/admin" element={<Admin />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
