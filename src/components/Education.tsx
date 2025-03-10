import React from "react";
import '../assets/styles/Education.scss';

function Education() {
    return (
        <div id="education">
            <div className="items-container">
                <h1>Educação</h1>
                <div className="education-grid">
                    <div className="education-card">
                        <h2>Curso Técnico de Gestão e Programação de Sistemas Informáticos</h2>
                        <h3>Escola Secundária de São Pedro do Sul</h3>
                        <p>09/2018 - 07/2021</p>
                    </div>
                    <div className="education-card">
                        <h2>Licenciatura em Engenharia Informática</h2>
                        <h3>Instituto Politécnico de Viseu</h3>
                        <p>09/2021 - 02/2025</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Education;