import Hero from "../components/Hero"
import Sponsors from "../components/Sponsors"
import Footer from "../components/Footer"
import About from "../components/About"
import MainEvents from "../components/MainEvents"

const Home = () => {
    return (
        <div>
            <Hero />
            <About />
            <MainEvents />
            <Sponsors />
            <Footer />
        </div>
        
    )
}

export default Home