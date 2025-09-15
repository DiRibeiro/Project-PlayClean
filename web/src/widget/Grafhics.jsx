import * as React from 'react';
import LineChart from './charts/LineChart';
import DoughnutChart from './charts/DoughnutChart';

export default function Grafhics({
  line = { labels: undefined, data: [] },
  doughnut = { labels: [], data: [], title: 'Denúncias por bairro' },
}) {
  return (
    <>
      <div className="col-md-7">
        <LineChart labels={line.labels} data={line.data} />
      </div>
      <div className="col-md-5">
        <h4 style={{ marginTop: 0 }}>{doughnut.title}</h4>
        <DoughnutChart labels={doughnut.labels} data={doughnut.data} />
      </div>
    </>
  );
}
