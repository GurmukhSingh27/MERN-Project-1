import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login"
import Home from "./components/Home"

function App(params) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element="Welcome to MERN Projects!" />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;