import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import NotFound from "./pages/NotFound";
import Chat from "./pages/Chat";

function App() {
  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/SignUp" element={<SignUp/>} />
        <Route path="/NotFound" element={<NotFound/>} />
        <Route path="/Chat" element={<Chat/>} />
      </Routes>
    </main>
  );
}

export default App;
