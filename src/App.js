import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Tawasul from "./components/Tawasul";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Main />} />
        <Route path="/" element={<Main />}>
          <Route path="/tawasul" element={<Tawasul />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
