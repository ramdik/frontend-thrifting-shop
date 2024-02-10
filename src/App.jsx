import { useEffect, useState } from "react"
import Login from "./pages/Login/Login.jsx"
import { getNewsList } from "./middlewares/get-api.js"
import "./App.css"

function App() {
  //const [listNews, setListNews] = useState([])

  useEffect(() => {
    getNewsList()
  }, [])

  const ListNewsToday = () => {
    return  (
        <div className="News-wrapper" >
          <div className="News-desc">uhuy</div>
        </div>
      )
   
  }

  return (
    <>
      {/* <ListNewsToday /> */}
      <Login />
    </>
  )
}

export default App
