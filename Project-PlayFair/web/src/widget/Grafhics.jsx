import React from 'react'

import LineChart from './LineChart'
import DoughnutChart from './DoughnutChart'

export default props => (
    <>
        <div className="col-md-7">
            <LineChart />
        </div>
        <div className="col-md-5">
        <h4>Denúncias por bairro</h4>
            <DoughnutChart />
        </div>
    </>
)