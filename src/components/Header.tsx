import React from 'react';
import '../styles/Header.css';

type Props = {
  toggleForm: () => void
}

const Header = (props: Props) => {
  return (
    <>
      <header className="header">
        <h1>BOOK MANAGEMENT</h1>
        <div>
          <button onClick={props.toggleForm}>Add Book</button>
        </div>
      </header>
    </>
  );
};

export default Header;
