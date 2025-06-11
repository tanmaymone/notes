import './Header.css';
import React from 'react';
import TakeNewNote from './TakeNewNote';

function Header({ onCreateNewNote }) {
  const [showDropdown, setShowDropdown] = React.useState(false);

  return (
    <header className="header">
      <div className="dropdown-container" style={{ position: "relative", display: "inline-block" }}>
        <button
          className="sidebar-toggle"
          aria-label="Open tag list"
          onClick={() => setShowDropdown((prev) => !prev)}
        >
          &#9776;
        </button>
        {showDropdown && (
          <ul className="dropdown-menu">
            <li>Dummy Option 1</li>
            <li>Dummy Option 2</li>
            <li>Dummy Option 3</li>
          </ul>
        )}
      </div>
      <h1 className="header-title">
        <span className="italic-n">N</span>otes
      </h1>
      <input type="text" className="header-search" placeholder="Search notes..." />
      <TakeNewNote onCreateNewNote={onCreateNewNote} />
    </header>
  );
}

export default Header;
