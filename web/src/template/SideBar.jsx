import * as React from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

import MenuItem from '../template/MenuItem';
import MenuTree from '../template/MenuTree';
import {
  setSidebarEvents,
  setSidebarReport,
  setSidebarCataTreco,
  setSidebarLei,
  setSidebarColetas,
} from '../actions/utilsActions';

export default function Sidebar() {
  const dispatch = useDispatch();

  const reportOpen = useSelector((s) => s.utils.sideReportOpen);
  const eventsOpen = useSelector((s) => s.utils.sideEventsOpen);
  const cataTrecoOpen = useSelector((s) => s.utils.sideCataTrecoOpen);
  const leiOpen = useSelector((s) => s.utils.sideLeiOpen);
  const coletasOpen = useSelector((s) => s.utils.sideColetasOpen);

  React.useEffect(() => {
    const token = localStorage.getItem('jogue-limpo');
    if (token) axios.defaults.headers.common.authorization = token;
  }, []);

  return (
    <aside className="main-sidebar">
      <section className="sidebar">
        <ul className="sidebar-menu" data-widget="tree">
          <MenuItem path="dashboard" icon="flag" label="Dashboard" />

          <li className={`treeview ${reportOpen ? 'menu-open' : ''}`}>
            <MenuTree
              open={!!reportOpen}
              icon="bullhorn"
              label="Denúncias"
              onClick={() => dispatch(setSidebarReport())}
            >
              <MenuItem path="listReport" icon="eye" label="Ver denúncias" />
              <MenuItem path="registerReport" icon="plus-square" label="Cadastrar" />
            </MenuTree>
          </li>

          <li className={`treeview ${leiOpen ? 'menu-open' : ''}`}>
            <MenuTree
              open={!!leiOpen}
              icon="balance-scale"
              label="Leis"
              onClick={() => dispatch(setSidebarLei())}
            >
              <MenuItem path="listLeis" icon="eye" label="Ver Leis" />
              <MenuItem path="Leis" icon="plus-square" label="Cadastrar Leis" />
            </MenuTree>
          </li>

          <li className={`treeview ${eventsOpen ? 'menu-open' : ''}`}>
            <MenuTree
              open={!!eventsOpen}
              icon="list"
              label="Eventos"
              onClick={() => dispatch(setSidebarEvents())}
            >
              <MenuItem path="calendar" icon="calendar" label="Calendário" />
              <MenuItem path="photos" icon="photo" label="Mural" />
            </MenuTree>
          </li>

          <li className={`treeview ${coletasOpen ? 'menu-open' : ''}`}>
            <MenuTree
              open={!!coletasOpen}
              icon="recycle"
              label="Coletas"
              onClick={() => dispatch(setSidebarColetas())}
            >
              <MenuItem path="listColetas" icon="eye" label="Ver Coletas" />
              <MenuItem path="coleta" icon="plus-square" label="Agendar Coletas" />
            </MenuTree>
          </li>

          <li className={`treeview ${cataTrecoOpen ? 'menu-open' : ''}`}>
            <MenuTree
              open={!!cataTrecoOpen}
              icon="shopping-cart"
              label="Cata-Treco"
              onClick={() => dispatch(setSidebarCataTreco())}
            >
              <MenuItem path="registerCataTreco" icon="plus-square" label="Agendar" />
              <MenuItem path="listCataTreco" icon="eye" label="Verificar agendamento" />
            </MenuTree>
          </li>
        </ul>
      </section>
    </aside>
  );
}
