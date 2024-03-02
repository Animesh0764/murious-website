import { Route, Routes } from "react-router-dom"
import SliderHackathon from "../sub-pages/SliderHackathon"
import Home from "../pages/Home"
import About from "../pages/About"
import Team from '../pages/Team';
import Events from '../pages/Events';
import Gallery from "../pages/Gallery"
import Authentication from "../pages/Authentication"
import RegistrationForm from "../pages/RegistrationForm";
import Game from "../pages/Game";
import Expanse from "../eventsPages/Expanse";
import CodeChaose from "../eventsPages/CodeChaos";
import InterFaceInvent from "../eventsPages/InterfaceInvent";
import PicturePerfect from "../eventsPages/PicturePerfect";
import FrameByFrame from "../eventsPages/FrameByFrame";
import Days7Designs from "../eventsPages/7Days7Designs";
import BridgeMaking from "../eventsPages/BridgeMaking";
import WebOFiesta from "../eventsPages/WebOFiesta";
import CodeCleanse from "../eventsPages/CodeCleanse";

function Router() {
    return (
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/play' element={<Game />} />
                <Route path='/team' element={<Team />} />
                <Route path='/gallery' element={<Gallery />} />
                <Route path='/events' element={<Events />} />
                <Route path='/registration' element={<RegistrationForm />} />
                <Route path='/gallery/hackathon' element={<SliderHackathon />} />
                <Route path='/signin' element={<Authentication />} />
                <Route path='/expanse' element={<Expanse />} />
                <Route path='/codechaos' element={<CodeChaose />} />
                <Route path='/interfaceinvent' element={<InterFaceInvent />} />
                <Route path='/pictureperfect' element={<PicturePerfect />} />
                <Route path='/framebyframe' element={<FrameByFrame />} />
                <Route path='/7days7designs' element={<Days7Designs />} />
                <Route path='/bridgemaking' element={<BridgeMaking />} />
                <Route path='/webofiesta' element={<WebOFiesta />} />
                <Route path='/codecleanse' element={<CodeCleanse />} />
            </Routes>
    )
}

export default Router