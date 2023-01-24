import React, { Suspense, lazy } from 'react'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetMeta } from "./HelmetMeta";
import { ThemeProvider } from "../components/theme/ThemeProvider";
import { CssBaseline } from "@material-ui/core";

import { Home } from "../pages/Home";
import { PageNotFound } from '../pages/PageNotFound'

const Qr = lazy(() => import('../pages/Qr'))
const Resume = lazy(() => import("../pages/Resume"))

export const App = () => {

  return (
    <ThemeProvider>
      <CssBaseline />
      <HelmetMeta />
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter >
          <Routes>
            <Route index element={<Home />} />
            <Route path="/qr" element={<Qr />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </ThemeProvider>
  );
};
