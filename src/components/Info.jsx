import MyPhoto from './icons/my-photo.png'
import MailIcon from './icons/Mail.png'
import LinkedInIcon from './icons/linkedin.png'

export default function Info() {
    const handleLinkedInClick = () => {

    }
    return (
        <div>
            <img className="my-photo" src={MyPhoto} alt="Photo of me"/>
            <div className='info-text'>
                <h2>Jean-Daniel Sinkpon</h2>
                <h3>Web Design Learner</h3>
                <h4>dasini.website</h4>
            </div>
            <div className='buttons-section'>
                <a href="mailto:danielsinkpon@gmail.com">
                    <button className='left-button'>
                        <img className='mail-img' src={MailIcon} alt="Mail Icon" />
                        <p>Email</p>
                    </button>
                </a>
                <a href="https://www.linkedin.com/in/daniel-sinkpon/" target='_blank'>
                    <button className='right-button'>
                        <img className='linkedin-img' src={LinkedInIcon} alt="Linkedin Icon" />
                        <p>LinkedIn</p>
                    </button>
                </a>
            </div>
        </div>
    )   
}