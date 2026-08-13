"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import * as XLSX from "xlsx";

type Row = { produto: string; ncm: string; natureza: string };

function natureza(operacao: string) {
  if (operacao === "nao-onerosa") return "Não onerosa (sem contraprestação)";
  if (operacao === "exportacao") return "Exportação — conferir tratamento aplicável";
  if (operacao === "especial") return "Regime especial/diferenciado";
  return "Onerosa (com contraprestação)";
}

export default function ClassificadorPage() {
  const [operacao, setOperacao] = useState("onerosa");
  const [showResult, setShowResult] = useState(false);
  const [rows, setRows] = useState<Row[]>([]);

  function submit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); setShowResult(true); }
  async function importFile(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0]; if (!file) return;
    const workbook = XLSX.read(await file.arrayBuffer(), { type: "array" });
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const data = XLSX.utils.sheet_to_json<Record<string, unknown>>(sheet, { defval: "" }).slice(0, 100);
    setRows(data.map((row) => {
      const op = String(row["Operação"] || row["Operacao"] || "").toLowerCase();
      return { produto: String(row["Descrição"] || row["Descricao"] || row["Produto"] || "—"), ncm: String(row.NCM || "—"), natureza: op.includes("doa") || op.includes("brinde") ? "Não onerosa" : op.includes("export") ? "Exportação" : "Onerosa / revisar" };
    }));
  }

  return <main className="classifier-page"><nav className="nav shell"><a className="brand" href="/"><span>TM</span> TaxMind</a><a className="nav-cta" href="/">Voltar ao início</a></nav><section className="classifier-hero"><div className="shell"><p className="eyebrow">REFORMA TRIBUTÁRIA</p><h1>Classificador IBS, CBS e cClassTrib</h1><p>Triagem de produtos e operações baseada na LC nº 214/2025. A confirmação do código exige consulta à tabela oficial vigente e validação fiscal.</p></div></section><section className="shell classifier-content"><div className="classifier-grid"><form className="tool-card" onSubmit={submit}><h2>Consultar produto</h2><label>Descrição do produto ou serviço<textarea required rows={3} placeholder="Ex.: cadeira de escritório em madeira" /></label><label>NCM (se houver)<input inputMode="numeric" placeholder="0000.00.00" /></label><label>Tipo de operação<select value={operacao} onChange={(event) => setOperacao(event.target.value)}><option value="onerosa">Venda com contraprestação (onerosa)</option><option value="nao-onerosa">Doação, brinde ou sem contraprestação</option><option value="exportacao">Exportação</option><option value="especial">Regime especial/diferenciado</option></select></label><button>Fazer triagem →</button></form><article className="tool-card"><h2>Importar planilha</h2><p>Envie XLSX, XLS ou CSV com as colunas <b>Descrição</b> e <b>NCM</b>; a coluna <b>Operação</b> é opcional.</p><label className="file-label">Selecionar planilha<input type="file" accept=".xlsx,.xls,.csv" onChange={importFile} /></label><p className="small-note">São exibidas as primeiras 100 linhas. Nenhum arquivo é enviado nesta demonstração.</p></article></div>{showResult && <section className="triage-result"><b>Triagem concluída — validação necessária</b><div><p><strong>Natureza:</strong> {natureza(operacao)}</p><p><strong>IBS e CBS:</strong> o enquadramento depende da operação e do regime aplicável.</p><p><strong>cClassTrib:</strong> consulte a tabela oficial para definir o código.</p></div></section>}{rows.length > 0 && <section className="batch-table"><h2>Produtos importados</h2><table><thead><tr><th>Produto</th><th>NCM</th><th>Natureza</th><th>cClassTrib</th></tr></thead><tbody>{rows.map((row, index) => <tr key={index}><td>{row.produto}</td><td>{row.ncm}</td><td>{row.natureza}</td><td>Validar na tabela oficial</td></tr>)}</tbody></table></section>}<p className="legal-disclaimer">A LC 214/2025 institui IBS, CBS e IS. Este recurso apoia a organização da análise, não substitui orientação tributária ou a validação por profissional habilitado.</p></section></main>;
}

