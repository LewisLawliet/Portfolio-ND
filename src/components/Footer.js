import React from 'react';
import '../index.css';

class Footer extends React.Component {
    render() {
        return (

    <footer>
        <div className = "conteneurIcon">
            <div className = "icon">
                <a href="https://github.com/LewisLawliet" target="_blank"  rel="noopener noreferrer">
                <img src="images/icon_github.png" className="iconGithub" />
                </a>

                <a href="mailto:nadirdjebbar@gmail.com" target="_blank"  rel="noopener noreferrer">
                <img src="images/courriel5.png" className="iconEmail" />
                </a>
            
                <a href="https://www.linkedin.com/in/nadir-djebbar-4bb284175/" target="_blank"  rel="noopener noreferrer">
                <img src="images/linkedin2.png" className="iconLinkedin" />
                </a>
            </div>  
        </div>
    </footer>
        );
    }
}


export default Footer;