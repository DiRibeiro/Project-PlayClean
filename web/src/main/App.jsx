import React from 'react';
import { Outlet } from 'react-router-dom'; // Importando o Outlet

import Header from '../reports/Header';
import SideBar from '../template/SideBar';
import Footer from '../containers/Footer';

const App = () => {
    return (
        <div className="wrapper">
            <Header />
            <SideBar />
            <div className="content-wrapper">
                <section className="content container-fluid">
                    <Outlet /> {/* Renderizando o conteúdo das rotas filhas */}
                </section>
            </div>
            <Footer />
        </div>
    );
};

export default App;
