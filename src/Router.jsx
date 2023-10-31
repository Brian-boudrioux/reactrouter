import { Routes, Route } from "react-router-dom";
import Stores from "./pages/Stores";
import Deals from "./pages/Deals";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Stores />} />
      <Route path="/deals/:storeID" element={<Deals />} />
    </Routes>
  );
}

export default Router;
