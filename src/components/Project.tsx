import React from "react";
import grolab from '../assets/images/grolab.png';
import django from '../assets/images/django.png';
import visit_sps from '../assets/images/visit_sps.png';
import websoft from '../assets/images/WebSoft.png';
import appsoft from '../assets/images/AppSoft.png';
import wordpress from '../assets/images/wordpress.png';
import '../assets/styles/Project.scss';

function Project() {
    return (
        <div className="projects-container" id="projects">
            <h1>Projetos Realizados</h1>
            <div className="projects-grid">
                <div className="project">
                    <a href="" target="_blank" rel="noreferrer"><img src={grolab} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href="" target="_blank" rel="noreferrer"><h2>GroLab Mobile Data Viewer</h2></a>
                    <p>Aplicação móvel em Flutter para a gestão do sistema GroLab, integração de comunicação Modbus TCP/IP e SQLite para gestão de módulos, áreas, visualização de câmaras via live feed e entre outros.</p>
                </div>
                <div className="project">
                    <a href="https://github.com/GoncaloAlvesGG/visit_sps" target="_blank" rel="noreferrer"><img src={visit_sps} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href="https://github.com/GoncaloAlvesGG/visit_sps" target="_blank" rel="noreferrer"><h2>Visit SPS - Projeto de Aptidão Profissional</h2></a>
                    <p>Aplicação Turística fullstack desenvolvida em Flutter, Windows Forms (gestão) e SQLite, integração de BD local, sistema dinâmico, responsivo e adaptativo de mostragem de dados.
                    </p>
                </div>
                <div className="project">
                    <a href="https://github.com/GoncaloAlvesGG/Projeto_Softinsa_Mobile_APP" target="_blank" rel="noreferrer"><img src={appsoft} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href="https://github.com/GoncaloAlvesGG/Projeto_Softinsa_Mobile_APP" target="_blank" rel="noreferrer"><h2>Aplicação Softinsa Candidaturas e Leads - Projeto Integrado</h2></a>
                    <p>Aplicação Mobile Android implementada em Kotlin com comunicações via RESTful API programada em Express.js.</p>
                </div>
                <div className="project">
                    <a href="https://github.com/pchu22/Node-React-Fullstack-Enterprise-Website" target="_blank" rel="noreferrer"><img src={websoft} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href="https://github.com/pchu22/Node-React-Fullstack-Enterprise-Website" target="_blank" rel="noreferrer"><h2>Plataforma Web Softinsa Candidaturas e Leads - Projeto Integrado</h2></a>
                    <p>Projeto Fullstack com frontend Web em React.js, backend em Express.js e base de dados em PostgreSQL. Comunicação através de RESTful API e Role Based Access Control.</p>
                </div>
                <div className="project">
                    <a href="https://github.com/GoncaloAlvesGG/BD2-eCommerce " target="_blank" rel="noreferrer"><img src={django} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href="https://github.com/GoncaloAlvesGG/BD2-eCommerce " target="_blank" rel="noreferrer"><h2>Projeto Loja de Vendas</h2></a>
                    <p>Plataforma de vendas (Semelhante a uma Amazon simplificada)criada em Django, com base de dados em PostgreSQL e MongoDB, vários perfis de utilizador e níveis de acesso. Criada no ambito da disciplina de Base de Dados 2.</p>
                </div>
                <div className="project">
                    <a href="https://alojadoemblema.pt/" target="_blank" rel="noreferrer"><img src={wordpress} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href="https://alojadoemblema.pt/" target="_blank" rel="noreferrer"><h2>A Loja do Emblema - Plataforma de eCommerce</h2></a>
                    <p>Loja Online interativa e responsiva criada para a Loja Diplomata. Utilizado Wordpress e WooCommerce.</p>
                </div>
            </div>
        </div>
    );
}

export default Project;