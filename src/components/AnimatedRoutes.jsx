import { Route, Routes, useLocation } from "react-router-dom";
import { Home, Destination, Crew, Technology } from "../pages";
import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/destination" element={<Destination />}></Route>
        <Route path="/crew" element={<Crew />}></Route>
        <Route path="/technology" element={<Technology />}></Route>
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
