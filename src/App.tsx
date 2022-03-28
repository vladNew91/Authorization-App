import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LayoutComponent } from './components';
import { ProfilePage, SignInPage } from './pages';
import './App.css';

export const App: React.FC = (): JSX.Element => {
  return (
    <div className="App">
      <LayoutComponent>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SignInPage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>
        </BrowserRouter>
      </LayoutComponent>
    </div>
  );
};
