import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import ProductList from "./Pages/ProductList"
import Sidebar from "./Components/Sidebar"
import Topbar from "./Components/Topbar"
import Home from "./Pages/Home"
import "./App.css"

function App() {
  return (
    <div className="App">
      <Router>
        <Topbar />
        <div className="container">
          <Sidebar />
          <div className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product" element={<ProductList />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  )
}

export default App
