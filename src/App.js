import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Main from "./components/Main";
import Tawasul from "./components/Tawasul";
import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/main" element={<Main />} />
        <Route path="*" element={<Main />} />
        <Route path="/tawasul" element={<Tawasul />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes /> {/* Render the animated routes */}
    </BrowserRouter>
  );
}

export default App;
