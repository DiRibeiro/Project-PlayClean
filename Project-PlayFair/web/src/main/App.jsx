import React from 'react'

import Header from '../reports/Header'
import SideBar from '../template/SideBar'
import Footer from '../containers/Footer'

const App = (props) => {
    return(
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
}

export default App