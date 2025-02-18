import React from 'react';



function AmbassadorLayout({ children }) {
  return (
    <div className="ambassador-container">
      <nav>Ambassador Nav</nav>
      {children}
    </div>
  );
}

export default AmbassadorLayout;