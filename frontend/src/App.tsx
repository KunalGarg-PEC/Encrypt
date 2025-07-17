import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import UploadSheet from './pages/UploadSheet';
import RequireAuth from './components/RequireAuth';

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />

      {/* Protected routes */}
      <Route
        path="/"
        element={
          <RequireAuth children={undefined}>
            <DashboardPage />
          </RequireAuth>
        }
      />
      <Route
        path="/upload"
        element={
          <RequireAuth children={undefined}>
            <UploadSheet />
          </RequireAuth>
        }
      />

      {/* Catch-all: redirect to login */}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}
