import { Route, Routes } from "react-router-dom"
import SliderHackathon from "../sub-pages/SliderHackathon"
import Home from "../pages/Home"
import About from "../pages/About"
import Gallery from "../pages/Gallery"
import Authentication from "../pages/Authentication"

function Router() {
    return (
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/gallery' element={<Gallery />} />
                <Route path='/gallery/hackathon' element={<SliderHackathon />} />
                <Route path='/signin' element={<Authentication />} />
            </Routes>
    )
}

export default Router