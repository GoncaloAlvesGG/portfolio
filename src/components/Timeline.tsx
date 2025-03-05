import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Experiência Profissional</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="02/2024 - 07/2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Open Grow - Estágio Profissional - GroLab Mobile Data Viewer</h3>
            <h4 className="vertical-timeline-element-subtitle">Coimbrões, Viseu</h4>
            <p>
              Desenvolvimento de uma aplicação móvel em Flutter para a gestão do sistema GroLab.
            </p>
            <p>
              Integração de comunicação Modbus TCP/IP e SQLite para gestão de módulos, áreas, visualização de câmaras via live feed e entre outros.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="06/2019 - 06/2019 | 05/2021 - 07/2021"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Izertis S. L. - Estágio Profissional - HelpDesk</h3>
            <h4 className="vertical-timeline-element-subtitle">Oliveira de Frades, Portugal</h4>
            <p>
              Montagem, substituição e manutenção de componentes em diversos computadores;
            </p>
            <p>
              Configuração de múltiplos computadores
            </p>
            <p>
              Prestação de serviços de ajuda a diversos colaboradores na área das TIC;
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;