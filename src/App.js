
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import {Header} from "./components/header.js"
import {Footer} from "./components/footer.js"
import {Home} from "./pages/home.js";
import {User} from "./pages/user.js";
import {Login} from "./pages/login.js";
import { Signup } from './pages/signup.js';





function App() {
  return (
    <>
    
    <BrowserRouter> 
    <Header />
  <Routes>
  <Route path="/" element={<Home />} />
  <Route path="login" element={<Login />} />
  <Route path="user" element={<User />} />
  <Route path="signup" element={<Signup />} />
  </Routes>
  <Footer />
  </BrowserRouter>
 
 </>
  );
}

export default App;