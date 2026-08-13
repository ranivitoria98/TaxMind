"use client";

import { FormEvent, useState } from "react";

const benefits = [
  ["Leitura inteligente", "Transforme descrições complexas em caminhos tributários mais claros."],
  ["Decisões com contexto", "Centralize critérios, evidências e próximos passos em um só lugar."],
  ["Mais confiança", "Organize sua análise para trabalhar com mais velocidade e segurança."],
];

export default function Home() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setAnswer(question.trim()
      ? "Recebemos sua consulta. O TaxMind organizará os dados e indicará os pontos tributários que merecem validação profissional."
      : "Descreva o produto, serviço ou operação para iniciar uma análise.");
  }

  return (
    <main>
      <nav className="nav shell">
        <a className="brand" href="#inicio" aria-label="TaxMind início"><span>TM</span> TaxMind</a>
        <div className="nav-links"><a href="#como-funciona">Como funciona</a><a href="#solucoes">Soluções</a></div>
        <a className="nav-cta" href="#consulta">Experimentar agora</a>
      </nav>

      <section className="hero" id="inicio">
        <div className="hero-overlay" />
        <div className="shell hero-content">
          <p className="eyebrow">INTELIGÊNCIA QUE SIMPLIFICA</p>
          <h1>O futuro da análise tributária começa com clareza.</h1>
          <p className="hero-copy">O TaxMind ajuda negócios e especialistas a navegar decisões tributárias com contexto, organização e agilidade.</p>
          <div className="hero-actions"><a className="primary-button" href="#consulta">Fazer uma consulta <span>→</span></a><a className="play-link" href="#como-funciona"><i>▶</i> Conheça o TaxMind</a></div>
          <div className="hero-proof"><strong>+ clareza</strong><span>para decisões que movimentam seu negócio</span></div>
        </div>
      </section>

      <section className="stats shell" aria-label="Destaques TaxMind">
        <div><strong>01</strong><span>plataforma intuitiva</span></div>
        <div><strong>24/7</strong><span>acesso às suas consultas</span></div>
        <div><strong>360°</strong><span>visão da operação</span></div>
      </section>

      <section className="solution shell" id="solucoes">
        <div className="section-heading"><p className="eyebrow">PENSADO PARA DECIDIR MELHOR</p><h2>Menos incerteza. Mais direção.</h2></div>
        <div className="benefit-grid">{benefits.map(([title, description], index) => <article className="benefit-card" key={title}><b>0{index + 1}</b><h3>{title}</h3><p>{description}</p><a href="#consulta">Saiba mais <span>→</span></a></article>)}</div>
      </section>

      <section className="consultation" id="consulta">
        <div className="shell consultation-grid">
          <div><p className="eyebrow">COMECE AGORA</p><h2>Uma pergunta pode abrir o caminho certo.</h2><p>Conte sobre a sua operação e comece a estruturar sua análise tributária.</p></div>
          <form onSubmit={handleSubmit} className="consultation-form">
            <label htmlFor="question">O que você precisa analisar?</label>
            <textarea id="question" value={question} onChange={(event) => setQuestion(event.target.value)} placeholder="Ex.: Preciso entender a classificação e os tributos aplicáveis a..." rows={5} />
            <button type="submit">Iniciar consulta <span>→</span></button>
            {answer && <p className="form-answer" role="status">{answer}</p>}
          </form>
        </div>
      </section>

      <footer className="footer shell"><a className="brand" href="#inicio"><span>TM</span> TaxMind</a><p>Inteligência tributária para decisões mais claras.</p><small>© {new Date().getFullYear()} TaxMind. Consulte sempre um profissional habilitado.</small></footer>
    </main>
  );
}

