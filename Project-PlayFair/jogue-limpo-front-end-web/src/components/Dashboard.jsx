import React from 'react'

import DashboardContent from '../containers/DashboardContent'

export default props => (
    <div className="box box-success">
        <div className="box-header with-border">
            <h3 className="box-title">Denúncias</h3>
        </div>
        <div className="box-body">
            <div className="row">
                <DashboardContent />
            </div>
        </div>
    </div>
)