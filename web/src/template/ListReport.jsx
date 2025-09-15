import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import RowReport from '../containers/RowReport';
import { getReports } from '../actions/reportActions';

function EmptyState() {
  return <h1 style={{ opacity: 0.7, fontSize: 22 }}>Nenhum registro</h1>;
}

export default function ListReport() {
  const dispatch = useDispatch();
  const list = useSelector((s) => s.reports.list) || [];

  React.useEffect(() => {
    dispatch(getReports());
  }, [dispatch]);

  if (!list.length) return <EmptyState />;

  return (
    <>
      {list.map((rep) => (
        <RowReport key={rep._id ?? rep.title} report={rep} />
      ))}
    </>
  );
}
