import * as React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import App from './App';

// lazy chunks (divide por domínio para paralelizar melhor)
const Dashboard        = React.lazy(() => import('../template/Dashboard'));
const NewReport        = React.lazy(() => import('../reports/NewReport'));
const NewLeis          = React.lazy(() => import('../reports/NewLeis'));
const NewCataTreco     = React.lazy(() => import('../reports/NewCataTreco'));
const ListReports      = React.lazy(() => import('../template/ListReport'));
const ReportDetail     = React.lazy(() => import('../containers/ShowReportDetails'));
const Coleta           = React.lazy(() => import('../containers/coletas/Coleta'));
const ListColetas      = React.lazy(() => import('../containers/coletas/ListColetas'));
const ListCataTreco    = React.lazy(() => import('../template/ListCataTreco'));
const CataTrecoDetail  = React.lazy(() => import('../containers/ShowCataTrecoDetails'));
const Photos           = React.lazy(() => import('../containers/photos/NewPhotos'));
const Calendar         = React.lazy(() => import('../containers/todo/todo'));
const ListLeis         = React.lazy(() => import('../template/ListLeis'));
const LeisDetail       = React.lazy(() => import('../containers/ShowLeisDetails'));

function Fallback() {
  return (
    <div style={{ padding: 16, display: 'flex', alignItems: 'center', gap: 8 }}>
      <i className="fas fa-circle-notch fa-spin" aria-hidden="true" />
      <span>Carregando...</span>
    </div>
  );
}

export default function MainRouter() {
  return (
    <BrowserRouter>
      <React.Suspense fallback={<Fallback />}>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Dashboard />} />

            {/* Denúncias */}
            <Route path="registerReport" element={<NewReport />} />
            <Route path="listReport" element={<ListReports />} />
            <Route path="showDetailReport" element={<ReportDetail />} />

            {/* Leis */}
            <Route path="registerLeis" element={<NewLeis />} />
            <Route path="leis" element={<NewLeis />} />
            <Route path="listLeis" element={<ListLeis />} />
            <Route path="showDetailLeis" element={<LeisDetail />} />

            {/* Cata-Treco */}
            <Route path="registerCataTreco" element={<NewCataTreco />} />
            <Route path="listCataTreco" element={<ListCataTreco />} />
            <Route path="showDetailCataTreco" element={<CataTrecoDetail />} />

            {/* Eventos / Fotos / Coletas */}
            <Route path="calendar" element={<Calendar />} />
            <Route path="photos" element={<Photos />} />
            <Route path="coleta" element={<Coleta />} />
            <Route path="listColetas" element={<ListColetas />} />

            {/* fallback 404 → dashboard */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </React.Suspense>
    </BrowserRouter>
  );
}
