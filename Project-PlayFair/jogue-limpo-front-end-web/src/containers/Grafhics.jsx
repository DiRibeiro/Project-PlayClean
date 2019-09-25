import React from 'react'

import BarChart from '../widget/BarChart'
import PolarChart from '../widget/PolarChart'

export default props => (
    <>
        <div className="col-md-7">
            <BarChart />
        </div>
        <div className="col-md-5">
        <h4>Denúncias por bairro</h4>
            <PolarChart />
        </div>
    </>
)