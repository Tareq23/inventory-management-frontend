/* eslint-disable prettier/prettier */
import "./App.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Login from "./components/Login/Login"
import Homepage from "./components/Admin/Homepage"

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/admin-homepage" element={<Homepage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
