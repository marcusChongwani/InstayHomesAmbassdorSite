
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./screens/Home";
import About from "./screens/About";
import SignUpForm from "./Authentication/SignUpForm";
import LogInForm from "./Authentication/LogInForm";
import DashboardLayout from "./screens/DashboardLayout";
import Overview from "./screens/DashboardScreens/Overview"
import Settings from "./screens/DashboardScreens/Settings";

export default function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Navbar />
        <AnimatedRoutes />
      </BrowserRouter>
    </div>
  );
}

// New component to handle route transitions
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<SignUpForm/>} />
        <Route path="/login" element={<LogInForm/>} />

        
        <Route path="dashboard/*" element={<DashboardLayout />}>
          <Route path="overview" element={<Overview />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        
      </Routes>
    </AnimatePresence>
  );
};