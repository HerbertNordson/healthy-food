import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Footer from "../components/footer";
import Register from "../pages/Register";

function RoutesLink() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </>
  );
}

export default RoutesLink;
