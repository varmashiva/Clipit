import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Profile from "./Components/Profile";
import Login from "./Components/Login";
import SignUp from "./Components/Signup";
import RecordingPage from "./Components/RecordingPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recordings" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/recording" element={<RecordingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
