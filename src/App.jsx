import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Home, Destination, Crew, Technology } from "./pages";

export default function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/destination" element={<Destination />}></Route>
          <Route path="/crew" element={<Crew />}></Route>
          <Route path="/technology" element={<Technology />}></Route>
        </Routes>
      </Router>
    </div>
  );
}
