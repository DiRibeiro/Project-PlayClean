import * as React from 'react';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="main-footer" role="contentinfo">
      <strong>
        © {year}{' '}
        <a
          href="https://www.google.com"
          rel="noopener noreferrer"
          target="_blank"
          aria-label="Abrir site Jogue Limpo com Osório em uma nova aba"
        >
          Jogue Limpo com Osório
        </a>
      </strong>
    </footer>
  );
}
