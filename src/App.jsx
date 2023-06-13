import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import AnimatedRoutes from "./components/AnimatedRoutes";

export default function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <AnimatedRoutes />
      </Router>
    </div>
  );
}
