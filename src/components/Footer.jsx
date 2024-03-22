import TwitterIcon from './icons/Twitter Icon.png'
import FacebookIcon from './icons/Facebook Icon.png'
import InstagramIcon from './icons/Instagram Icon.png'
import GitHubIcon from './icons/GitHub Icon.png'

export default function Footer() {
    return (
        <footer className='footer-section'>
            <a href="http://">
                <img src={TwitterIcon} alt="Twitter Icon" />
            </a>
            <a href="http://">
                <img src={FacebookIcon} alt="Facebook Icon" />
            </a>
            <a href="http://">
                <img src={InstagramIcon} alt="Instagram Icon" />
            </a>
            <a href="https://github.com/dani-sink" target='_blank'>
                <img src={GitHubIcon} alt="GitHub Icon"/>
            </a>
        </footer>
    )   
}