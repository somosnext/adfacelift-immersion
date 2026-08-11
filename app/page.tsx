const scheduleDescription =
  "Cronograma Lipoenxertia. Primeira etapa no Shopping Cristal: 7h Coffee Break; 7h30 Aula teórica; 8h30 Apresentação do patrocinador, Lipocube ou Toyo, com demonstração técnica dos equipamentos; deslocamento para o Hospital Teknon. Etapa prática: hands-on às 10h, 13h, 15h, 17h, 19h e 21h, com pausa para almoço às 12h. Coffee Break disponível a partir das 15h. Estrutura para 6 pacientes, máximo de 6 alunos no hands-on e até 50 participantes observacionais.";

export default function Home() {
  return (
    <main className="poster-site">
      <section className="poster-section" aria-label="Congresso AdFaceLift Immersion">
        <img
          className="poster-image"
          src="/referencias/adfacelift-hero.jpeg"
          alt="Congresso AdFaceLift Immersion. Lipoenxertia. 21 de outubro."
          width="1024"
          height="1536"
          fetchPriority="high"
        />
      </section>

      <section className="poster-section" aria-label="Cronograma Lipoenxertia">
        <img
          className="poster-image"
          src="/referencias/adfacelift-cronograma.jpeg"
          alt={scheduleDescription}
          width="1024"
          height="1536"
          loading="eager"
        />
      </section>
    </main>
  );
}
