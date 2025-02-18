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
        {/* Main section - this will be the root route */}
        <Route path="/" element={<MainRoutes />} />

        {/* Ambassador section */}
        <Route path="/ambassador/*" element={<AmbassadorRoutes />} />
      </Routes>

      {/* Global Routes */}
      <Route path="/signup" element={<SignUpForm />} />
      <Route path="/login" element={<LogInForm />} />

    </Router>
  );
}

export default App;