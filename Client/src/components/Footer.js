import "../css/FooterStyles.css"

const Footer = () =>{
    return(
        <div className="footer">
            <div className="top">
                <div>
                    <h1>Quest</h1>
                    <p>Choose your favourite destination.</p>
                </div>
                <div>
                    <a href="https://www.linkedin.com/in/adarshsahu/">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="https://www.instagram.com/adarshsahu27/">
                        <i className="fa-brands fa-instagram-square"></i>
                    </a>
                    <a href="https://github.com/adarshsahu2803">
                        <i className="fa-brands fa-github-square"></i>
                    </a>
                </div>
            </div>

            <div className="bottom">
                <div>
                    <h4>Project</h4>
                    <a href="/">Changelog</a>
                    <a href="/">Status</a>
                    <a href="/">License</a>
                    <a href="/">All Versions</a>
                </div>
                <div>
                    <h4>Community</h4>
                    <a href="/">GitHub</a>
                    <a href="/">Issues</a>
                    <a href="/">Project</a>
                    <a href="/">Twitter</a>
                </div>
                <div>
                    <h4>Help</h4>
                    <a href="/">Support</a>
                    <a href="/">Troubleshooting</a>
                    <a href="/">Contact Us</a>
                </div>
                <div>
                    <h4>Others</h4>
                    <a href="/">Terms of Service</a>
                    <a href="/">Privacy Policy</a>
                    <a href="/">License</a>
                </div>
            </div>    
        </div>
    );
}

export default Footer