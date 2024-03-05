import Hero from "../components/Hero"
import Sponsors from "../components/Sponsors"
import Footer from "../components/Footer"
import About from "../components/About"
import MainEvents from "../components/MainEvents"
import Countdown from "../components/Countdown/Countdown"

const Home = () => {
    return (
        <div>
            <Hero />
            <About />
            <Countdown />
            <MainEvents />
            <Sponsors />
            <Footer />
        </div>
        
    )
}

export default Home