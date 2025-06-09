
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import CreateAppointment from "./pages/CreateAppointment";

function App() {
  return (
    <Router>
      <div className="p-4">
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/create" element={<CreateAppointment />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
