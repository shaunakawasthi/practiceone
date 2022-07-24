import { BrowserRouter ,Routes , Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import "./components/Design/_flex.scss" 
import "./components/Design/_common.scss" 
import Diet from "./components/Diet/Diet"
import Medicine from "./components/Medicine/Medicine";
import Exercise from "./components/Exercise/Exercise";
import Profile from "./components/Profile/Profile";


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>

    <Route path="/home" element={<Home/>} />
    <Route path="/" element={<Login/>} />
    <Route path="/diet" element={<Diet/>} />
    <Route path="/medicine" element={<Medicine/>} />
    <Route path="/exercise" element={<Exercise/>} />
    <Route path="/profile/:id" element={<Profile/>} />

   </Routes>
    </BrowserRouter>
  </>
    );
}

export default App;
