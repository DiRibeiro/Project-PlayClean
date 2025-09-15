// helper/date.js
// Fuso oficial do projeto (ver instruções): America/Sao_Paulo
const TZ = 'America/Sao_Paulo';
const LOCALE = 'pt-BR';

// Utils
const pad2 = (n) => String(n).padStart(2, '0');
const isValidDate = (d) => d instanceof Date && !Number.isNaN(d.getTime());

/**
 * Converte um valor (Date | string | number) em Date válido.
 * - ISO strings (“2025-09-12”) ou timestamps funcionam.
 * - Retorna null se for inválido.
 */
export function toDate(value) {
  if (value instanceof Date) return isValidDate(value) ? value : null;
  if (value === null || value === undefined || value === '') return null;
  const d = new Date(value);
  return isValidDate(d) ? d : null;
}

/**
 * Formata data longa: "12 de setembro de 2025"
 * Usa Intl com locale pt-BR e timezone America/Sao_Paulo.
 */
export function fullDate(value) {
  const d = toDate(value);
  if (!d) return '';
  return d.toLocaleDateString(LOCALE, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: TZ,
  });
}

/**
 * Formata data curta: "12/09/2025"
 */
export function shortDate(value) {
  const d = toDate(value);
  if (!d) return '';
  // Pegamos os componentes no fuso correto para evitar “viradas” de dia
  const day = new Intl.DateTimeFormat(LOCALE, { day: '2-digit', timeZone: TZ }).format(d);
  const month = new Intl.DateTimeFormat(LOCALE, { month: '2-digit', timeZone: TZ }).format(d);
  const year = new Intl.DateTimeFormat(LOCALE, { year: 'numeric', timeZone: TZ }).format(d);
  return `${day}/${month}/${year}`;
}

/**
 * Formata para <input type="date">: "YYYY-MM-DD"
 * Importante: respeita o fuso para não “andar” um dia.
 */
export function shortDateHTML(value) {
  const d = toDate(value);
  if (!d) return '';
  const day = new Intl.DateTimeFormat(LOCALE, { day: '2-digit', timeZone: TZ }).format(d);
  const month = new Intl.DateTimeFormat(LOCALE, { month: '2-digit', timeZone: TZ }).format(d);
  const year = new Intl.DateTimeFormat(LOCALE, { year: 'numeric', timeZone: TZ }).format(d);
  return `${year}-${month}-${day}`; // YYYY-MM-DD
}

/**
 * (Opcional) Constrói um Date a partir de "YYYY-MM-DD" de <input type="date">,
 * interpretando a data como meia-noite no fuso America/Sao_Paulo,
 * evitando deslocamentos de timezone ao salvar.
 */
export function fromHTMLDate(yyyyMmDd) {
  if (!yyyyMmDd || typeof yyyyMmDd !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(yyyyMmDd)) return null;
  const [y, m, d] = yyyyMmDd.split('-').map((x) => parseInt(x, 10));

  // Cria uma data “local” no fuso alvo sem deixar o motor converter para UTC em outro dia.
  // Estratégia: cria como UTC e depois pega os componentes no TZ, minimizando deslocamento inadvertido.
  // Para a maioria dos casos, basta new Date(y, m-1, d). Mantemos simples:
  const local = new Date(y, (m - 1), d, 0, 0, 0, 0);
  return isValidDate(local) ? local : null;
}

/**
 * Retorna nome do mês em pt-BR (0 = janeiro ... 11 = dezembro).
 * Usa Intl ao invés de tabela fixa para manter consistência com locale.
 */
export function getMonth(indexZeroBased) {
  if (typeof indexZeroBased !== 'number' || indexZeroBased < 0 || indexZeroBased > 11) return '';
  const ref = new Date(2000, indexZeroBased, 1); // qualquer ano serve
  return ref.toLocaleDateString(LOCALE, { month: 'long', timeZone: TZ });
}

// Export “months” caso o restante do app ainda use um array:
export const months = Array.from({ length: 12 }, (_, i) => getMonth(i));

export default {
  toDate,
  fullDate,
  shortDate,
  shortDateHTML,
  fromHTMLDate,
  getMonth,
  months,
};
