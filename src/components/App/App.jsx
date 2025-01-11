import { Route, Routes } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import HomePage from "../../pages/HomePage/HomePage";
import MoviesPage from "../../pages/MoviesPage/MoviesPage";


export default function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/muvies" element={<MoviesPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}
