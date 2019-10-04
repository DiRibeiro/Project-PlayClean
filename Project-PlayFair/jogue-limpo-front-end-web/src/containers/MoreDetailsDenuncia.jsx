import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { getReports } from '../actions/reportActions'

const MoreDetailsDenuncia = () => {
    const dispatch = useDispatch();
    const list = useSelector(state => state.reports.list)

    useEffect(() => {
        dispatch(getReports())
    }, [])
    
    function renderRows() {
        return list.map(report =>
            <div className="box box-success">
            <div className="box-body">
                <div className="row">
                    <div class="col-md-6">
                        <div class="box box-solid">
                            <div class="box-body">
                                <div id="carousel" class="carousel slide  floatLeft" data-ride="carousel">
                                    <ol class="carousel-indicators">
                                        <li data-target="#carousel" data-slide-to="0" class="active"></li>
                                        <li data-target="#carousel" data-slide-to="1" class=""></li>
                                        <li data-target="#carousel" data-slide-to="2" class=""></li>
                                    </ol>
                                    <div class="carousel-inner">
                                        <div class="item active">
                                            <img src="./img/lixos/l1.jpg" alt="Primeira foto" />
                                        </div>
                                    <div class="item">
                                        <img src="./img/lixos/l2.jpg" alt="Segunda foto" />
                                    </div>
                                    <div class="item">
                                        <img src="./img/lixos/l3.jpg" alt="Terceira foto" />
                                    </div>
                                </div>
                                    <a class="left carousel-control" href="#carousel" data-slide="prev">
                                        <span class="fa fa-angle-left"></span>
                                    </a>
                                    <a class="right carousel-control" href="#carousel" data-slide="next">
                                        <span class="fa fa-angle-right"></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-5">
                        <h2 className="box-title">
                        <b>Nome do solicitante:</b> { report.name } </h2>
                        <br />                     
                        <b>Data da denúncia: </b> { report.date }
                        <br />
                        <b>Tipo da denúncia: </b> { report.typeReport }
                        <br />
                        <b>Local da denúncia: </b> { report.adressOccured }
                        <br />
                        <br />
                        <b>Descrição:</b>
                        <p>{ report.description }</p>
                        <br />
                    </div>
                    
                </div>
            </div>
        </div>
        )
    }
    return renderRows()
}


export default MoreDetailsDenuncia