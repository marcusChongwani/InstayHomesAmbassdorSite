import React from 'react';




function MainLayout({ children }) {
  return (
    <div className="main-container">
      <nav>Main Instay Nav</nav>
      {children}
    </div>
  );
}

export default MainLayout;