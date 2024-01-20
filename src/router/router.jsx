import { Route, Routes } from "react-router-dom"
import SliderHackathon from "../sub-pages/SliderHackathon"
import Home from "../pages/Home"
import About from "../pages/About"
import Team from '../pages/Team';
import Events from '../pages/Events';
import Gallery from "../pages/Gallery"
import Authentication from "../pages/Authentication"
import RegistrationForm from "../pages/RegistrationForm";

function Router() {
    return (
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/team' element={<Team />} />
                <Route path='/gallery' element={<Gallery />} />
                <Route path='/events' element={<Events />} />
                <Route path='/registration' element={<RegistrationForm />} />
                <Route path='/gallery/hackathon' element={<SliderHackathon />} />
                <Route path='/signin' element={<Authentication />} />
            </Routes>
    )
}

export default Router