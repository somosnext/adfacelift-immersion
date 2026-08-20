const topics = [
  "Histórico e bases científicas da lipoenxertia",
  "Coleta da gordura",
  "Processamento da gordura",
  "Locais para aplicação de gordura na face",
  "Técnicas para aplicação da gordura na face",
  "Complicações e seu manejo",
  "Macrofat, microfat e nanofat",
  "Tecnologias associadas",
];

const sessions = ["13h", "15h", "17h", "19h"];

function SurgicalCenter({ number }: { number: number }) {
  return (
    <section className="surgical-center" aria-labelledby={`center-${number}`}>
      <h2 id={`center-${number}`}>CENTRO CIRÚRGICO {number}</h2>
      <div className="center-sessions">
        {sessions.map((time, index) => (
          <div className="center-row" key={`${number}-${time}`}>
            <time>{time}</time>
            <p><span>Hands-on</span><span>Paciente {index + 1}</span></p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="poster-site">
      <section className="hero-poster" aria-label="Congresso AdFaceLift Immersion">
        <img
          className="hero-image"
          src="/referencias/adfacelift-hero.jpeg"
          alt="Congresso AdFaceLift Immersion. Lipoenxertia. 21 de outubro."
          width="1024"
          height="1536"
          fetchPriority="high"
        />
      </section>

      <section className="schedule" aria-labelledby="schedule-title">
        <div className="schedule-inner">
          <header className="schedule-header">
            <p>CRONOGRAMA</p>
            <span className="header-line" aria-hidden="true" />
            <h1 id="schedule-title">21 de Outubro</h1>
          </header>

          <p className="location"><strong>LOCAL:</strong> Hospital Teknon</p>

          <section className="morning" aria-label="Programação da manhã">
            <div className="schedule-row"><time>7h</time><p>Coffee Break</p></div>
            <div className="schedule-row"><time>7h30</time><p>Aula teórica</p></div>

            <div className="topics-row">
              <span aria-hidden="true" />
              <div className="topics-card">
                <h2>TÓPICOS ABORDADOS</h2>
                <ol>
                  {topics.map((topic) => <li key={topic}>{topic}</li>)}
                </ol>
              </div>
            </div>

            <div className="schedule-row"><time>10h</time><p>Demonstração prática</p></div>
            <div className="schedule-row"><time>12h</time><p>Almoço</p></div>
          </section>

          <div className="centers">
            <SurgicalCenter number={1} />
            <SurgicalCenter number={2} />
          </div>

          <aside className="coffee-note">
            <strong>A partir das 15h — Coffee Break livre</strong>
          </aside>

          <section className="structure" aria-labelledby="structure-title">
            <div className="section-heading"><h2 id="structure-title">ESTRUTURA</h2><span /></div>
            <ul>
              <li>6 pacientes: 1 pela manhã + 5 no período da tarde/noite</li>
              <li>Hands-on com máximo de 6 alunos</li>
              <li>Observacional: até 50 participantes</li>
              <li>Acompanhamento observacional por transmissão ao vivo em 4K ou presencialmente, acompanhando a prática dos alunos.</li>
            </ul>
          </section>
        </div>
      </section>
    </main>
  );
}
