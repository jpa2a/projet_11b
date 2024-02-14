
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import {Header} from "./components/header.js"
import {Footer} from "./components/footer.js"
import {Home} from "./pages/home.js";
import {Profile} from "./pages/profile.js";
import {Login} from "./pages/login.js";
import { Signup } from './pages/signup.js';
import { Erreur } from './pages/erreur404.js';





function App() {
  return (
    <>
    
    <BrowserRouter> 
    <Header />
  <Routes>
  <Route path="/" element={<Home />} />
  <Route path="login" element={<Login />} />
  <Route path="profile" element={<Profile />} />
  <Route path="signup" element={<Signup />} />
  <Route path="*" element={<Erreur />}/>
  </Routes>
  <Footer />
  </BrowserRouter>
 
 </>
  );
}

export default App;
