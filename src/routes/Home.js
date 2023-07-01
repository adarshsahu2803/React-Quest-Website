import Destination from "../components/Destination"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import HomeImg from "../assets/12.jpg"
import Trip from "../components/Trip";
import Footer from "../components/Footer";

function Home (){
    return(
        <>
        <Navbar/>
        <Hero
            cName="hero"
            heroImg={HomeImg}
            title="Your Journey Your Story"
            text="Choose Your Favourite Destination."
            buttonText="Travel Plan"
            url="/"
            btnClass="show"
        />
        <Destination/>
        <Trip/>
        <Footer/>
        </>
    );
}

export default Home;