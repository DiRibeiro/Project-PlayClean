import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import RowCataTreco from '../containers/RowCataTreco';
import { getCataTreco } from '../actions/cataTrecoActions';

function EmptyState({ title = 'Nenhum registro' }) {
  return <h1 style={{ opacity: 0.7, fontSize: 22 }}>{title}</h1>;
}

export default function ListCataTreco() {
  const dispatch = useDispatch();
  const list = useSelector((s) => s.cataTreco.list) || [];

  React.useEffect(() => {
    dispatch(getCataTreco());
  }, [dispatch]);

  if (!list.length) return <EmptyState />;

  return (
    <>
      {list.map((item) => (
        <RowCataTreco key={item._id ?? item.protocol} cataTreco={item} />
      ))}
    </>
  );
}
