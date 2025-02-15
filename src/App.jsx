
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
import Pending from "./screens/DashboardScreens/Pending";
import Verified from "./screens/DashboardScreens/Verified";
import Create from "./screens/DashboardScreens/Create";

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

        
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Overview />} />
          <Route path="pending" element={<Pending />} />
          <Route path="verified" element={<Verified />} />
          <Route path="create" element={<Create />} />
          
        </Route>
        
      </Routes>
    </AnimatePresence>
  );
};