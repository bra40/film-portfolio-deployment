import ReactDom from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Greenless from "./Components/Sample/Films/Greenless";
import GoBack from "./Components/Sample/Helpers/GoBack";

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Greenless" element={<Greenless />} />
      <Route
        path="*"
        element={
          <div style={{backgroundColor: "white", height: "86vh" }}>
            <GoBack />
            <p>There's nothing here!</p>
          </div>
        }
      />
    </Routes>
  </BrowserRouter>
);