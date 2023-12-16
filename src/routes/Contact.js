import Hero from "../components/Hero"
import AboutImg from "../assets/2.jpg"
import Footer from "../components/Footer";

function Contact (){
    return(
        <>
        <Hero
            cName="hero-mid"
            heroImg={AboutImg}
            title="Contact"
            btnClass="hide"
        />
        <Footer/>
        </>
    );
}

export default Contact;