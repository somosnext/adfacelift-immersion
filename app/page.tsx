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

function Ornament() {
  return (
    <span className="ornament" aria-hidden="true">
      <i />
      <b />
      <i />
    </span>
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
            <Ornament />
            <h1 id="schedule-title">LIPOENXERTIA</h1>
            <Ornament />
          </header>

          <section className="day" aria-labelledby="day-one-title">
            <h2 className="pill" id="day-one-title">PRIMEIRO DIA</h2>
            <p className="location"><span />Shopping Cristal<span /></p>

            <div className="rows">
              <div className="schedule-row"><time>7h</time><p>Coffee Break</p></div>
              <div className="schedule-row"><time>7h30</time><p>Aula teórica</p></div>
            </div>

            <div className="topics-card">
              <h3>TÓPICOS ABORDADOS</h3>
              <ol>
                {topics.map((topic) => <li key={topic}>{topic}</li>)}
              </ol>
            </div>

            <h3 className="pill practice-title">HOSPITAL TEKNON — ETAPA PRÁTICA</h3>
            <div className="rows practical-rows">
              <div className="schedule-row long-row">
                <time>10h</time>
                <p>Demonstração prática</p>
              </div>
            </div>
          </section>

          <section className="day day-two" aria-labelledby="day-two-title">
            <h2 className="pill" id="day-two-title">SEGUNDO DIA</h2>
            <h3 className="pill practice-title">HANDS-ON COMPLETO</h3>
            <div className="rows">
              <div className="schedule-row"><time>Manhã</time><p>2 turmas</p></div>
              <div className="schedule-row"><time>Tarde</time><p>2 turmas</p></div>
            </div>
          </section>

          <aside className="coffee-note">
            <strong>A partir das 15h — Coffee Break livre</strong>
          </aside>

          <section className="structure" aria-labelledby="structure-title">
            <div className="section-heading"><span /><h2 id="structure-title">ESTRUTURA</h2><span /></div>
            <ul>
              <li>2 dias de imersão</li>
              <li>4 turmas de hands-on no segundo dia: 2 pela manhã + 2 à tarde</li>
              <li>Hands-on com máximo de 6 alunos</li>
              <li>Observacional: até 50 participantes</li>
              <li>Acompanhamento observacional por transmissão ao vivo em 4K ou presencialmente, acompanhando a prática dos alunos.</li>
            </ul>
          </section>

          <Ornament />
        </div>
      </section>
    </main>
  );
}
