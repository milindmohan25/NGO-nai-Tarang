import './App.css'
import { Provider } from "react-redux";
import CreatePostPage from "./Pages/CreatePostPage/CreatePostPage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import MainPage from "./Pages/MainPage/MainPage";
import SignupPage from "./Pages/SignUpPage/SignupPage";
import Footer from "./components/Footer/Footer";
import NavbarComp from "./components/Navbar/NavbarComp";
import { BrowserRouter as Router ,Routes,Route } from "react-router-dom";
import store from "./utils/store";
import SinglePostPage from "./Pages/SinglePostPage/SinglePostPage";
import Projects from "./Pages/Projects/Projects";
import AboutUs from './Pages/About/AboutUs';
import ContactUs from './Pages/Contact/ContactUs';
import Donate from './Pages/Donate/Donate';


function App() {
  return (
    <>
    <Router>
      <Provider store={store}>
      <NavbarComp/>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/about" element={<AboutUs/>}/>
        <Route path="/contact" element={<ContactUs/>}/>
        <Route path="/donate" element={<Donate/>}/>
        <Route path="/signup" element={<SignupPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/create-post" element={<CreatePostPage/>}/>
        <Route path="/:id" element={<SinglePostPage/>}/>
      </Routes>
      <Footer/>
      </Provider>
    </Router>
      </>
  );
}

export default App;
