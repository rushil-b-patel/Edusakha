import AdminEventForm from "./Components/Event";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import HomePage from "./Components/HomePage";
import StudentEventPage from "./Components/StudentEventPage";
import LoginForm from "./Components/LoginForm";
import Event from "./Components/Event";

function App() {
  return (
    <BrowserRouter>
      <>
        <Header />
        <Routes>
          <Route path="/HomePage" element={<HomePage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/Event" element={<Event />} />
          <Route path="/StudentEventPage" element={<StudentEventPage />} />
          <Route path="/LoginForm" element={<LoginForm />} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
