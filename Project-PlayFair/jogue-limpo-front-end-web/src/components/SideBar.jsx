import React from 'react'

import MenuItem from '../containers/MenuItem'
import MenuTree from '../containers/MenuTree'

export default props => (
    <aside className="main-sidebar">
        <section className="sidebar">
            <ul className="sidebar-menu" data-widget="tree" >
                <MenuItem path='/apresentation' icon='list' label='Apresentação' /> {/* chart-line */}
                <MenuItem path='/leis' icon='book' label='Leis' /> {/* chart-line */}
                <MenuTree icon='list-alt' label='Eventos'> 
                    <MenuItem path='/calendar' icon='calendar' label='Calendário' />
                    <MenuItem path='/photos' icon='image' label='Fotos' />
                </MenuTree>
                <MenuTree icon='list-alt' label='Horário de Coleta'> 
                    <MenuItem path='/coletaSeletiva' icon='recycle' label='Coleta Seletiva' />
                    <MenuItem path='/coletaOrganica' icon='recycle' label='Coleta Orgânica' />
                </MenuTree>
                <MenuTree icon='list-alt' label='Denúncias'> 
                    <MenuItem path='/listReport' icon='eye' label='Ver denúncias' />
                    <MenuItem path='/editReport' icon='edit' label='Verificar denúncias' />
                </MenuTree>
            </ul>
        </section>
    </aside>
)