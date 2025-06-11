import './Header.css';
import TakeNewNote from './TakeNewNote';

function Header({
  onCreateNewNote,
  searchQuery,
  setSearchQuery,
  onSearch,
  onResetSearch,
}) {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      onSearch();
    }
  };

  return (
    <header className="header">
      <h1 className="header-title" style={{ cursor: 'pointer' }} onClick={onResetSearch}>
        <span className="italic-n">N</span>otes
      </h1>

      <div className="search-container">
        <input
          type="text"
          className="header-search"
          placeholder="Search notes..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>

      <div style={{ display: 'flex', alignItems: 'center' }}>
  <TakeNewNote onCreateNewNote={onCreateNewNote} />
</div>

    </header>
  );
}

export default Header;
