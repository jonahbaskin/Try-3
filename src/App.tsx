/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import ZipCheck from './pages/ZipCheck';
import Pledge from './pages/Pledge';

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div key={location.pathname} className="min-h-full">
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/check-zip" element={<ZipCheck />} />
          <Route path="/pledge" element={<Pledge />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50 font-sans text-slate-900 flex flex-col selection:bg-blue-200">
        <Navigation />
        <main className="flex-1">
          <AnimatedRoutes />
        </main>
      </div>
    </Router>
  );
}

