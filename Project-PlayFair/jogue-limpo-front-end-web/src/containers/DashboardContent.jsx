import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import BarChart from '../widget/BarChart'
import PolarChart from '../widget/PolarChart'

import Bookmark from '../widget/Bookmark'
import Map from '../widget/Map'

import { getDashboardData } from '../actions/dashboardActions'

const DashboardContent = () => {

    const dispatch = useDispatch()
        
    const bookmark = useSelector(state => state.dashboard.bookmark)
    //const polarChart = useSelector(state => state.dashboard.polarChart)
    //const barChart = useSelector(state => state.dashboard.barChart)
    const map = useSelector(state => state.dashboard.map)

    function makeTheDateMakeSense(number) {
        const months = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"]
        return months[number]
    }

    useEffect(() => {
        dispatch(getDashboardData())
    }, [])

    return (
        <>
            <Bookmark 
                label={ `Denúncias de ${ makeTheDateMakeSense(bookmark.month) }` } 
                value={ bookmark.totalReports } 
                bg='aqua' 
                icon='chart-bar'
                month={ makeTheDateMakeSense(bookmark.month) }
            />
            <Bookmark 
                label='Denúncias fechadas' 
                value={ bookmark.closedReports }
                bg='green' 
                icon='check-circle' 
                month={ makeTheDateMakeSense(bookmark.month) }
            />
            <Bookmark 
                label='Denúncias em aberto' 
                value={ bookmark.openReports }
                color="bg-yellow-seccondary" 
                icon='list-alt'
                month={ makeTheDateMakeSense(bookmark.month) }
            />
            <div className="row">
                <div className="col-12 col-md-7">
                    <BarChart />
                </div>
                <div className="col-12 col-md-5">
                    <h4>Denúncias por bairro</h4>
                    <PolarChart />
                </div>
            </div>
            <Map map={ map } />
        </>
    )

}

export default DashboardContent
