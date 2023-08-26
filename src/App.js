import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import HomePage from "./Components/HomePage";
import StudentEventPage from "./Components/StudentEventPage";
import LoginForm from "./Components/LoginForm";
import Event from "./Components/Event";
import ProtectedRoute from "./utils/ProtectedRoute";
import SignupForm from "./Components/SignupForm";

function App() {
  return (
    <BrowserRouter>
      <>
        <Navbar />
        <Routes>
          <Route path="/HomePage" element={<HomePage />} />
          <Route path="/" element={<HomePage />} />
          {/* <Route element={<ProtectedRoute />}> */}
          <Route path="/Event" element={<Event />} />
          <Route path="/StudentEventPage" element={<StudentEventPage />} />
          <Route path="/SignupForm" element={<SignupForm />} />
          <Route path="/LoginForm" element={<LoginForm />} />
          {/* </Route> */}
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
