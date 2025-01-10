import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<h1>Marina</h1>} />
        <Route path="/about" element={<h1>All</h1>} />
      </Routes>
    </div>
  );
}
