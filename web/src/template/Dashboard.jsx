import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import LineChart from '../widget/LineChart'
import DoughnutChart from '../widget/DoughnutChart'

import Bookmark from '../widget/Bookmark'
import Map from '../widget/Map'

import { getDashboardData } from '../actions/dashboardActions'

import { getMonth } from '../helper/date'

const Dashboard = () => {

    const dispatch = useDispatch()
        
    const bookmark = useSelector(state => state.dashboard.bookmark)
    const lineChart = useSelector(state => state.dashboard.lineChart)
    const doughnutChart = useSelector(state => state.dashboard.doughnutChart)
    const map = useSelector(state => state.dashboard.map)

    useEffect(() => {
        dispatch(getDashboardData())
    }, [])

    return (
        <div className="box box-success">
            <div className="box-header with-border">
                <h3 className="box-title">Denúncias</h3>
            </div>
            <div className="box-body">
               
                <div className="row">
                    <Bookmark 
                        label={ `Denúncias de ${ getMonth(bookmark.month) }` } 
                        value={ bookmark.totalReports } 
                        bg='aqua' 
                        icon='chart-bar'
                        month={ getMonth(bookmark.month) } />
                    <Bookmark 
                        label='Denúncias fechadas' 
                        value={ bookmark.closedReports }
                        bg='green' 
                        icon='check-circle' 
                        month={ getMonth(bookmark.month) } />
                    <Bookmark 
                        label='Denúncias em aberto' 
                        value={ bookmark.totalReports - bookmark.closedReports }
                        color="bg-yellow-seccondary" 
                        icon='list-alt'
                        month={ getMonth(bookmark.month) } />
                    <div className="row">
                        <div className="col-11 col-md-7">
                            <LineChart data={ lineChart.data } style={{ marginLeft: '8px' }}/>
                        </div>
                        <div className="col-11 col-md-5">
                            <h4>Denúncias por bairro</h4>
                            <DoughnutChart labels={ doughnutChart.labels } data={ doughnutChart.data } />
                        </div>
                    </div>
                    <Map map={ map } />
                </div>
            </div>
        </div>
    )

}

export default Dashboard
