import { useEffect, useState } from "react"
import Login from "./pages/Login/Login.jsx"
import Regist from "./pages/Regist/Regist.jsx"
import SearchBar from "./components/SearchBar/SearchBar.jsx"
//import { getProductList } from "./middlewares/get-api.js"
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  //const [listNews, setListNews] = useState([])

 /*  useEffect(() => {
    getProductList()
  }, [])

  const ListNewsToday = () => {
    return (
      <div className="News-wrapper" >
        <div className="News-desc">uhuy</div>
      </div>
    )

  } */

  return (
    <>
      {/* <ListNewsToday /> */}
      <Router>
        <Routes>
        <Route path="/" element={<SearchBar />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/sign-in" element={<Regist />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
