import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const headerFooterLinks = ["/in", "/in/chat"];
  const disableHeaderFooter = headerFooterLinks.includes(pathname);

  if (disableHeaderFooter) {
    return(
        <main className="grow relative overflow-x-hidden">
        <Outlet />
      </main>
    );
  }
  return (
    <div className="flex flex-col">
      <Header />
      <main className="grow relative overflow-x-hidden">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;