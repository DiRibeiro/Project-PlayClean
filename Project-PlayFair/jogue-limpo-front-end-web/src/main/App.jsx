import React from 'react'

import Header from '../components/Header'
import SideBar from '../components/SideBar'
import Footer from '../components/Footer'

export default props => (
    <div className="wrapper" >
        <Header />
        <SideBar />
        <div className="content-wrapper">
            <section className="content container-fluid">
                { props.children }
            </section>
        </div>
        <Footer />
    </div>
)