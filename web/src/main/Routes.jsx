import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NewReport from '../reports/NewReport';
import NewLeis from '../reports/NewLeis';
import NewCataTreco from '../reports/NewCataTreco';

import Dashboard from '../template/Dashboard';
import ListReports from '../template/ListReport';
import ReportDetail from '../containers/ShowReportDetails';
import Coleta from '../containers/coletas/Coleta';
import ListColetas from '../containers/coletas/ListColetas';
import ListCataTreco from '../template/ListCataTreco';
import CataTrecoDetail from '../containers/ShowCataTrecoDetails';
import Photos from '../containers/photos/NewPhotos';
import Calendar from '../containers/todo/todo';
import ListLeis from '../template/ListLeis';
import LeisDetail from '../containers/ShowLeisDetails';

import App from './App';

export default function MainRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route index element={<Dashboard />} />
                    <Route path="registerReport" element={<NewReport />} />
                    <Route path="registerLeis" element={<NewLeis />} />
                    <Route path="registerCataTreco" element={<NewCataTreco />} />
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="listReport" element={<ListReports />} />
                    <Route path="coleta" element={<Coleta />} />
                    <Route path="listColetas" element={<ListColetas />} />
                    <Route path="leis" element={<NewLeis />} />
                    <Route path="listLeis" element={<ListLeis />} />
                    <Route path="showDetailLeis" element={<LeisDetail />} />
                    <Route path="calendar" element={<Calendar />} />
                    <Route path="photos" element={<Photos />} />
                    <Route path="showDetailReport" element={<ReportDetail />} />
                    <Route path="listCataTreco" element={<ListCataTreco />} />
                    <Route path="showDetailCataTreco" element={<CataTrecoDetail />} />
                </Route>
            </Routes>
        </Router>
    );
}
