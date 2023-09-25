import Home from "./components/home";
import SignUp from "./components/signUp";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="bg-black-800 min-h-screen min-w-full">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/register" element={<SignUp />}></Route>
      </Routes>
    </div>
  );
}

export default App;
