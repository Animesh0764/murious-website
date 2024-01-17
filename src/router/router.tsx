import { Route, Routes } from "react-router-dom"
import SliderHackathon from "../sub-pages/SliderHackathon"
import Home from "../pages/Home"
import About from "../pages/About"
import Gallery from "../pages/Gallery"

function Router() {
    return (
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/gallery' element={<Gallery />} />
                <Route path='/gallery/hackathon' element={<SliderHackathon />} />
            </Routes>
    )
}

export default Router