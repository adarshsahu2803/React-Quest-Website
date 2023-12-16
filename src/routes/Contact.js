import Hero from "../components/Hero"
import AboutImg from "../assets/2.jpg"
import ContactForm from "../components/ContactForm";

function Contact (){
    return(
        <>
        <Hero
            cName="hero-mid"
            heroImg={AboutImg}
            title="Contact"
            btnClass="hide"
        />
        <ContactForm/>
        </>
    );
}

export default Contact;