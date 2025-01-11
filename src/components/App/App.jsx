import { Route, Routes } from "react-router-dom";
import Navigation from "../Navigation/Navigation";

export default function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<h1>HomePage</h1>} />
        <Route path="/muvies" element={<h1>MoviesPage</h1>} />
      </Routes>
    </div>
  );
}
