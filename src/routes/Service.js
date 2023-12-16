import Hero from "../components/Hero"
import AboutImg from "../assets/night.jpg"
import Trip from "../components/Trip";

function Service (){
    return(
        <>
        <Hero
            cName="hero-mid"
            heroImg={AboutImg}
            title="Service"
            btnClass="hide"
        />
        <Trip/>
        </>
    )
}

export default Service;