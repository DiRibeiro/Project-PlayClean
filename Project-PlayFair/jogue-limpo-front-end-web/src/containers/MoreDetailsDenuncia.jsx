import React from 'react'
import IconButton from '../templates/iconButton'
import ListReport from './ListReport'

const MoreDetailsDenuncia = props => (
    <>
        <div className="box box-primary">
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
                    <b>Nome do solicitante:</b> </h2>
                    <br />
                    <b>Data da denúncia: </b>
                    <br />
                    <b>Tipo da denúncia: </b>
                    <br />
                    <b>Local da denúncia: </b> 
                    <br />
                    <b>Bairro: </b> 
                    <br />
                    <br />
                    <b>Descrição:</b>
                    <br />
                    {props.description}
                </div>
                <tr  className="floatRigth" key={ListReport._id}>
                    <td className={ListReport.done ? 'markedAsDone' : ''}>{ListReport.description}</td>
                    <td>
                        <IconButton style="primary" icon="eye" hide={ListReport.done} onClick={props.handleRefresh}>
                                </IconButton>
                        <IconButton style="danger" icon="refresh" /* hide={!ListReport.done} */ onClick={props.handleRefresh}>
                                </IconButton>
                        <IconButton style="warning" icon="hourglass" /* hide={!ListReport.done} */ onClick={props.handleMarkAsPending}>
                                </IconButton>
                        <IconButton style="success" icon="check" /* hide={!ListReport.done} */ onClick={props.handleMarkAsDone}>
                                </IconButton>
                    </td>
                </tr>
            </div>
        </div>
    </div>
    </>
)

export default MoreDetailsDenuncia