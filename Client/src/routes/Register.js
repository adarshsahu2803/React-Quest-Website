import Hero from "../components/Hero"
import register from "../assets/2.jpg"
import Login from "../components/Login";

function Register (){
    return(
        <>
        <Hero
            cName="hero-mid"
            heroImg={register}
            title="Register"
            btnClass="hide"
        />
        <Login />
        </>
    );
}

export default Register;