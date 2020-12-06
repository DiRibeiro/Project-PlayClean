import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import LineChart from '../widget/LineChart'
// import DoughnutChart from '../widget/DoughnutChart'

import Bookmark from '../widget/Bookmark'
import Map from '../widget/Map'

import { getDashboardData } from '../actions/dashboardActions'
import { getDashboardCtData } from '../actions/dashboardCtActions'

import { getMonth } from '../helper/date'

const Dashboard = () => {

    const dispatch = useDispatch()
        
    const bookmarkCt = useSelector(state => state.dashboardCt.bookmark)
    // const doughnutChartCt = useSelector(state => state.dashboardCt.doughnutChart)
    const lineChartCt = useSelector(state => state.dashboardCt.lineChart)

    const bookmark = useSelector(state => state.dashboard.bookmark)
    const lineChart = useSelector(state => state.dashboard.lineChart)
    const map = useSelector(state => state.dashboard.map)

    useEffect(() => {
        dispatch(
            getDashboardData(),
            getDashboardCtData()
            )
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
                </div>
                <div className="box-header with-border">
                    <h3 className="box-title">Cata-Treco</h3>
                </div>
                    <div className="row">
                        <Bookmark 
                            label={ `Cata-Treco de ${ getMonth(bookmarkCt.month) }` } 
                            value={ bookmarkCt.totalCt } 
                            bg='aqua' 
                            icon='chart-bar'
                            month={ getMonth(bookmarkCt.month) } />
                        <Bookmark 
                            label='Cata-Treco fechadas' 
                            value={ bookmarkCt.closedCt }
                            bg='green' 
                            icon='check-circle' 
                            month={ getMonth(bookmarkCt.month) } />
                        <Bookmark 
                            label='Cata-Treco em aberto' 
                            value={ bookmarkCt.totalCt - bookmarkCt.closedCt }
                            color="bg-yellow-seccondary" 
                            icon='list-alt'
                            month={ getMonth(bookmarkCt.month) } />
                    </div>
                
                    <div className="row">
                        <div className="col-11 col-md-6">
                            <LineChart data={ lineChart.data } style={{ marginLeft: '8px' }}/>
                        </div>
                        {/* <div className="col-11 col-md-5">
                            <h4>Cata-Treco por bairro</h4>
                            <DoughnutChart labels={ doughnutChartCt.labels } data={ doughnutChartCt.data } />
                        </div> */}
                        <div className="col-11 col-md-6">
                            <LineChart data={ lineChartCt.data } style={{ marginLeft: '8px' }}/>
                        </div>
                    </div>
                    
                    <Map map={ map } />
                </div>
        </div>
    )

}

export default Dashboard
