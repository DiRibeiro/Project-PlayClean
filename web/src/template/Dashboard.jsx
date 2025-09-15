import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import LineChart from '../widget/LineChart';
import Bookmark from '../widget/Bookmark';
import Map from '../widget/Map';

import { getDashboardData } from '../actions/dashboardActions';
import { getDashboardCtData } from '../actions/dashboardCtActions';
import { getMonth } from '../helper/date';

function BookmarkRow({ bookmark, title = 'Denúncias' }) {
  const month = getMonth(bookmark?.month ?? 0);
  const total = bookmark?.totalReports ?? 0;
  const closed = bookmark?.closedReports ?? 0;
  const open = Math.max(0, total - closed);

  return (
    <>
      <div className="box-header with-border">
        <h3 className="box-title">{title}</h3>
      </div>
      <div className="row">
        <Bookmark label={`${title} de ${month}`} value={total} bg="aqua" icon="chart-bar" month={month} />
        <Bookmark label={`${title} fechadas`} value={closed} bg="green" icon="check-circle" month={month} />
        <Bookmark label={`${title} em aberto`} value={open} color="bg-yellow-seccondary" icon="list-alt" month={month} />
      </div>
    </>
  );
}

export default function Dashboard() {
  const dispatch = useDispatch();

  const bookmarkCt = useSelector((s) => s.dashboardCt.bookmark) || {};
  const lineChartCt = useSelector((s) => s.dashboardCt.lineChart) || { data: [] };

  const bookmark = useSelector((s) => s.dashboard.bookmark) || {};
  const lineChart = useSelector((s) => s.dashboard.lineChart) || { data: [] };
  const map = useSelector((s) => s.dashboard.map) || {};

  React.useEffect(() => {
    dispatch(getDashboardData());
    dispatch(getDashboardCtData());
  }, [dispatch]);

  return (
    <div className="box box-success">
      <div className="box-body">
        <BookmarkRow bookmark={bookmark} title="Denúncias" />
        <BookmarkRow bookmark={{
          month: bookmarkCt.month,
          totalReports: bookmarkCt.totalCt,
          closedReports: bookmarkCt.closedCt,
        }} title="Cata-Treco" />

        <div className="row">
          <div className="col-11 col-md-6">
            <LineChart data={lineChart.data} style={{ marginLeft: 8 }} />
          </div>
          <div className="col-11 col-md-6">
            <LineChart data={lineChartCt.data} style={{ marginLeft: 8 }} />
          </div>
        </div>

        <Map map={map} />
      </div>
    </div>
  );
}
