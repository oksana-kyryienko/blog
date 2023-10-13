import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./components/Login";
import { Signup } from "./components/Signup";
import "./App.css";
import { Home } from "./components/Pages/Home/Home";
import { UserProvider } from "./UserContext";

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/home/*" element={<Home />}></Route>
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
