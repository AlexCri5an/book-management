import React from 'react';
import '../styles/Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <nav>
        <ul>
          <li><a href="/about">About</a></li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
