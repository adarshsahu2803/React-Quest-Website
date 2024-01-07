import Hero from "../components/Hero"
import signup from "../assets/2.jpg"
import SignupForm from "../components/SignupForm";

function Signup (){
    return(
        <>
        <Hero
            cName="hero-mid"
            heroImg={signup}
            title="Signup"
            btnClass="hide"
        />
        <SignupForm />
        </>
    );
}

export default Signup;