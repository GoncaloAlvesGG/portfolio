import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/GoncaloAlvesGG/" target="_blank" rel="noreferrer"><GitHubIcon /></a>
        <a href="https://www.linkedin.com/in/gon%C3%A7alo-alves-02a75617b/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
      </div>
      <p>© 2025 Gonçalo Alves</p>
    </footer>
  );
}

export default Footer;