import Hero from "../components/Hero"
import login from "../assets/2.jpg"
import LoginForm from "../components/LoginForm";

function Login (){
    return(
        <>
        <Hero
            cName="hero-mid"
            heroImg={login}
            title="Login"
            btnClass="hide"
        />
        <LoginForm />
        </>
    );
}

export default Login;