import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const RootLayout = () => {
  return (
    <div className="layout-client">
      <Navbar />
      <main className="layout-client-main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
