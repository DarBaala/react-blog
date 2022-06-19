import { Routes, Route } from "react-router-dom";
import "./scss/app.scss";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Posting from "./pages/Posting";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/posting" element={<Posting />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
