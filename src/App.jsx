import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AmbassadorRoutes from "./Routes/AmbassadorRoutes";
import MainRoutes from "./Routes/MainRoutes";
import SignUpForm from "./Authentication/SignUpForm";
import LogInForm from "./Authentication/LogInForm";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        {/* Main section - change path to "*" to handle nested routes properly */}
        <Route path="*" element={<MainRoutes />} />

        {/* Ambassador section */}
        <Route path="/ambassador/*" element={<AmbassadorRoutes />} />

        {/* Global Routes */}
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/login" element={<LogInForm />} />
      </Routes>
    </Router>
  );
}

export default App;
