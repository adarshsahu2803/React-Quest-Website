import Hero from "../components/Hero"
import AboutImg from "../assets/14.jpg"
import OptimalDestForm from "../components/OptimalDestForm";

function OptimalDest() {
    return (
        <>
            <Hero
                cName="hero-mid"
                heroImg={AboutImg}
                title="Find Your Optimal Destination"
                btnClass="hide"
            />
            <OptimalDestForm />
        </>
    );
}

export default OptimalDest;