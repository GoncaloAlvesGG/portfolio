import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faShieldHalved } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Flutter",
    "Dart",
    "Django",
    "Python",
    "React",
    "Node.js",
    "Express.js",
    "Kotlin",
    "Javascript",
    "HTML/CSS",
    "Windows Forms",
    "C#",
];

const labelsSecond = [
    "SQL",
    "PostgreSQL",
    "SQLite",
    "MySQL",
    "MongoDB",
];

const labelsThird = [
    "Burp Suite",
    "Segurança em APIs",
    "Metasploit",
    "SubNetting e CIDR",
    "Wireshark",
    "Exploração Web",
    "Kali Linux",
    "Nmap",
    "Protocolos de Rotas",
    
];

function Expertise() {
    return (
        <div className="container" id="expertise">
            <div className="skills-container">
                <h1>Conhecimentos</h1>
                <div className="skills-grid">
                    <div className="skill">
                        <FontAwesomeIcon icon={faReact} size="3x" />
                        <h3>Full Stack Web/Mobile/Desktop</h3>
                        <p>Sou um desenvolvedor full stack com experiência na criação de aplicações web, mobile e desktop do zero, utilizando tecnologias modernas, expertise tanto no frontend quanto no backend, com preferência em backend.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Stack:</span>
                            {labelsFirst.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faDatabase} size="3x" />
                        <h3>Experiência em Bases de Dados</h3>
                        <p>Tenho experiência no uso de bases de dados relacionais, garantindo estruturação e integridade dos dados, além de bases NoSQL como MongoDB, que oferecem maior flexibilidade e escalabilidade conforme as necessidades do projeto.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Stack:</span>
                            {labelsSecond.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faShieldHalved} size="3x" />
                        <h3>Redes e Cybersecurity</h3>
                        <p>
                        Adquiri conhecimentos na cibersegurança durante os meus tempos livres de forma autodidata, e redes em ambiente escolar. Como testes de intrusão, análise de tráfego, segmentação e roteamento de redes.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Stack:</span>
                            {labelsThird.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Expertise;