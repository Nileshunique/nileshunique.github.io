
import './App.css'
import Header from './Components/Header/Header'
import Blogs from './Pages/Blogs'
import MainPage from './Pages/MainPage/MainPage'
import { Routes, Route } from 'react-router-dom'

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
  )
}

export default App
