import './App.css';
import { Route, Routes } from "react-router-dom";
import Login from './pages/Login/Login';
import Register from './pages/register/Register';
import Dashboard from './pages/homePage/Dashboard';


function App() {
  return (

    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>

  );
}

export default App;
