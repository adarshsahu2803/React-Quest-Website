import Hero from "../components/Hero"
import signup from "../assets/2.jpg"

function Signup (){
    return(
        <>
        <Hero
            cName="hero-mid"
            heroImg={signup}
            title="Sign Up"
            btnClass="hide"
        />
        </>
    );
}

export default Signup;