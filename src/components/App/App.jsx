import { Route, Routes } from "react-router-dom";
import Navigation from "../Navigation/Navigation";

export default function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<h1>Marina</h1>} />
        <Route path="/muvies" element={<h1>All</h1>} />
      </Routes>
    </div>
  );
}
