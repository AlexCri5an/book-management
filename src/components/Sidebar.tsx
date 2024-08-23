import React from "react";
import "../styles/Sidebar.css";

const Sidebar = () => {
  const onAboutClick = () => {
    alert(`
      This is a simple book management application created using React.
  
      How to Use:
      1. Add new books by clicking the "Add Book" button and fill out the form.
      2. View and delete existing books by clicking the "View" or "Delete" buttons.
      3. Edit existing books by clicking the "Edit" button.
  
      Contact Information:
      LinkedIn: https://www.linkedin.com/in/alexandru-crisan-b80aa2316/
      Email: crisanalexandru12@yahoo.com
    `);
  };
  return (
    <aside className="sidebar">
      <nav>
        <ul>
          <li>
            <button onClick={onAboutClick}>About</button>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
