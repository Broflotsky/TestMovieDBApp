import { Routes, Route } from "react-router-dom";
import HomeView from "./views/home";
import MovieByIdView from "./views/moviebyid";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeView />} />
      <Route path="/detail/:id" element={<MovieByIdView />} />
    </Routes>
  );
}

export default App;
