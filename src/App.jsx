import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Nopage from "./pages/Nopage";
import Singlepost from "./pages/Singlepost";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/posts/:id" element={<Singlepost/>} />
        </Route>
        <Route path="/*" element={<Nopage />} />
      </Routes>
    </>
  );
}

export default App;
