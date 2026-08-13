"use client";

import { FormEvent, useState } from "react";

const benefits = [
  ["Leitura inteligente", "Transforme descriÃ§Ãµes complexas em caminhos tributÃ¡rios mais claros."],
  ["DecisÃµes com contexto", "Centralize critÃ©rios, evidÃªncias e prÃ³ximos passos em um sÃ³ lugar."],
  ["Mais confianÃ§a", "Organize sua anÃ¡lise para trabalhar com mais velocidade e seguranÃ§a."],
];

export default function Home() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setAnswer(question.trim()
      ? "Recebemos sua consulta. O TaxMind organizarÃ¡ os dados e indicarÃ¡ os pontos tributÃ¡rios que merecem validaÃ§Ã£o profissional."
      : "Descreva o produto, serviÃ§o ou operaÃ§Ã£o para iniciar uma anÃ¡lise.");
  }

  return (
    <main>
      <nav className="nav shell">
        <a className="brand" href="#inicio" aria-label="TaxMind inÃ­cio"><span>TM</span> TaxMind</a>
        <div className="nav-links"><a href="#como-funciona">Como funciona</a><a href="#solucoes">SoluÃ§Ãµes</a></div>
        <a className="nav-cta" href="#consulta">Experimentar agora</a>
      </nav>

      <section className="hero" id="inicio">
        <div className="hero-overlay" />
        <div className="shell hero-content">
          <p className="eyebrow">INTELIGÃŠNCIA QUE SIMPLIFICA</p>
          <h1>O futuro da anÃ¡lise tributÃ¡ria comeÃ§a com clareza.</h1>
          <p className="hero-copy">O TaxMind ajuda negÃ³cios e especialistas a navegar decisÃµes tributÃ¡rias com contexto, organizaÃ§Ã£o e agilidade.</p>
          <div className="hero-actions"><a className="primary-button" href="#consulta">Fazer uma consulta <span>â†’</span></a><a className="play-link" href="#como-funciona"><i>â–¶</i> ConheÃ§a o TaxMind</a></div>
          <div className="hero-proof"><strong>+ clareza</strong><span>para decisÃµes que movimentam seu negÃ³cio</span></div>
        </div>
      </section>

      <section className="stats shell" aria-label="Destaques TaxMind">
        <div><strong>01</strong><span>plataforma intuitiva</span></div>
        <div><strong>24/7</strong><span>acesso Ã s suas consultas</span></div>
        <div><strong>360Â°</strong><span>visÃ£o da operaÃ§Ã£o</span></div>
      </section>

      <section className="solution shell" id="solucoes">
        <div className="section-heading"><p className="eyebrow">PENSADO PARA DECIDIR MELHOR</p><h2>Menos incerteza. Mais direÃ§Ã£o.</h2></div>
        <div className="benefit-grid">{benefits.map(([title, description], index) => <article className="benefit-card" key={title}><b>0{index + 1}</b><h3>{title}</h3><p>{description}</p><a href="#consulta">Saiba mais <span>â†’</span></a></article>)}</div>
      </section>

      <section className="consultation" id="consulta">
        <div className="shell consultation-grid">
          <div><p className="eyebrow">COMECE AGORA</p><h2>Uma pergunta pode abrir o caminho certo.</h2><p>Conte sobre a sua operaÃ§Ã£o e comece a estruturar sua anÃ¡lise tributÃ¡ria.</p></div>
          <form onSubmit={handleSubmit} className="consultation-form">
            <label htmlFor="question">O que vocÃª precisa analisar?</label>
            <textarea id="question" value={question} onChange={(event) => setQuestion(event.target.value)} placeholder="Ex.: Preciso entender a classificaÃ§Ã£o e os tributos aplicÃ¡veis a..." rows={5} />
            <button type="submit">Iniciar consulta <span>â†’</span></button>
            {answer && <p className="form-answer" role="status">{answer}</p>}
          </form>
        </div>
      </section>

      <footer className="footer shell"><a className="brand" href="#inicio"><span>TM</span> TaxMind</a><p>InteligÃªncia tributÃ¡ria para decisÃµes mais claras.</p><small>Â© {new Date().getFullYear()} TaxMind. Consulte sempre um profissional habilitado.</small></footer>
    </main>
  );
}

