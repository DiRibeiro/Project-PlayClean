import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import RowLeis from '../containers/RowLeis';
import { getLeis } from '../actions/leisActions';

function EmptyState() {
  return <h1 style={{ opacity: 0.7, fontSize: 22 }}>Nenhum registro</h1>;
}

export default function ListLeis() {
  const dispatch = useDispatch();
  const list = useSelector((s) => s.leis.list) || [];

  React.useEffect(() => {
    dispatch(getLeis());
  }, [dispatch]);

  if (!list.length) return <EmptyState />;

  return (
    <>
      {list.map((lei) => (
        <RowLeis key={lei._id ?? lei.title} leis={lei} />
      ))}
    </>
  );
}
