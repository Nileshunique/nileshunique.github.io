import { } from "react-router";
import MainPage from "./Pages/MainPage/MainPage";
import { Route, Routes } from "react-router-dom";
import Blogs from "./Pages/Blogs";
import Header from "./Components/Header/Header";

function App() {
  return (
    <div className="">
      <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
      {/* <Routes>
        <Route element={<MainPage />} path="/" />
      </Routes> */}
    </div>
  );
}

export default App;
