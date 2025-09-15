import * as React from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../reports/Header';
import SideBar from '../template/SideBar';
import Footer from '../containers/Footer';

export default function App() {
  return (
    <div className="wrapper">
      {/* link de pular para conteúdo para acessibilidade */}
      <a href="#app-content" className="sr-only sr-only-focusable">Pular para o conteúdo</a>

      <Header />
      <SideBar />

      <div className="content-wrapper" role="main" id="app-content">
        <section className="content container-fluid">
          <Outlet />
        </section>
      </div>

      <Footer />
    </div>
  );
}
