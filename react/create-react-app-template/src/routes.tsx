import React, {ReactElement, lazy, Suspense} from 'react';
import {Route, Routes} from 'react-router-dom';

import Layout from './layouts/Index';
import Loading from "./pages/Loading";

const App = lazy(() => import('./pages/App'))

const routes = (): ReactElement => {
    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<Suspense fallback={<Loading/>} children={<App/>}/>}/>
                <Route path="index" element={<Suspense fallback={<Loading/>} children={<App/>}/>}/>
            </Route>
        </Routes>
    );
};

export default routes;
