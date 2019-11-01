import React from 'react'

export default props => (
    <div className="col-md-4 col-sm-6 col-xs-12">
        <div className={ props.bg ? `info-box bg-${ props.bg }` : `info-box ${ props.color }` } >       {/* Theme colors/custom colors */}
            <span className="info-box-icon"><i className={ `fa fa-${ props.icon } `} ></i></span>

            <div className="info-box-content">
                <span className="info-box-text">{ props.label }</span>
                <span className="info-box-number">{ props.value }</span>

                <div className="progress">
                    <div className="progress-bar /" />
                </div>
                <span className="progress-description">
                Relatório referente a { props.month }
                </span>
            </div>
        </div>
    </div>
)