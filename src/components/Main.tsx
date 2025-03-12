import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import { Analytics } from "@vercel/analytics/react"
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="https://github.com/GoncaloAlvesGG.png" alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/GoncaloAlvesGG/" target="_blank" rel="noreferrer"><GitHubIcon /></a>
            <a href="https://www.linkedin.com/in/gon%C3%A7alo-alves-02a75617b/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
            <a href="mailto:goncaloalves0603@gmail.com" target="_blank" rel="noreferrer"><EmailIcon /></a>
            <a href="tel:00351927798166" target="_blank" rel="noreferrer"><PhoneIcon /></a>
          </div>
          <h1>Gonçalo Alves</h1>

          <div className="mobile_social_icons">
            <a href="https://github.com/GoncaloAlvesGG/" target="_blank" rel="noreferrer"><GitHubIcon /></a>
            <a href="https://www.linkedin.com/in/gon%C3%A7alo-alves-02a75617b/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
            <a href="mailto:goncaloalves0603@gmail.com" target="_blank" rel="noreferrer"><EmailIcon /></a>
            <a href="tel:00351927798166" target="_blank" rel="noreferrer"><PhoneIcon /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;