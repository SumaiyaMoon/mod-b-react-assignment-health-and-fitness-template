import {  Link, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "../pages/about";
import Home from "../pages/home";
import Services from "../pages/services";
import NotFound from "../pages/notfound";
import Gallery from "../pages/gallery";
import Blog from "../pages/blog";
import Contact from "../pages/contact";
import Login from "../pages/login";
import SignUp from "../pages/signup";
import Schedule from "../pages/schedule";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../../assets/logo.png"
import ButtonComp from "../../component/button";
import NavBar from "../layout/navbar"; 
import NewMember from "../pages/newmember";




export default function AppRouter() {

    return (

        <>
        {/* <NavBar/>    */}

            <Router>
                {/* <nav className="navbar bg-black navbar-expand-lg" data-bs-theme="dark">
      <div className="container-fluid">
                    <Link className="navbar-brand fs-1" to="/"><img src={logo}/></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav d-flex align-items-center justify-content-around  ms-5">
                    <Link className="nav-link" to="/">Home</Link>
                    <Link className="nav-link" to="About">About</Link>
                    <Link className="nav-link" to="Services">Services</Link>
                    <Link className="nav-link" to="Contact">Contact</Link>
                    <Link className="nav-link" to="Login">Login</Link>
                    <Link className="nav-link" to="SignUp">SignUp</Link>
                    <Link className="nav-link" to="Schedule">Schedule</Link>
                    <Link className="nav-link" to="Gallery">Gallery</Link>
                    <Link className="nav-link" to="Blog">Blog</Link>
                    <ButtonComp btnType={"text"} btnValue={"Became a member"}/>
                    </div>
    </div>
                    </div>
                </nav> */}
{/* <NavBar/> */}

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="services" element={<Services />} />
                    <Route path="gallery" element={<Gallery />} />
                    <Route path="login" element={<Login />} />
                    <Route path="signUp" element={<SignUp />} />
                    <Route path="schedule" element={<Schedule />} />
                    <Route path="blog" element={<Blog />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="newMember" element={<NewMember />} />
                    <Route path="*" element={<NotFound />} />

                </Routes>
            </Router>
        </>

    )

}