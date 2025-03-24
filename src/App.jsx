import LoginScreen from "./components/LoginScreen";
import Profile from "./components/Profile";
import SignupScreen from "./components/SignupScreen";
import Welcome from "./Welcome";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="app d-flex flex-column justify-content-center align-items-center vh-100">
        <Routes>
          <Route path="/" element={<Welcome />}></Route>
          <Route path="/login" element={<LoginScreen />}></Route>
          <Route path="/signup" element={<SignupScreen />}></Route>
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
