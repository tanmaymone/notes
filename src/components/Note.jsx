import './Note.css';

function Note({ title, text, onClick, onDelete }) {
  return (
    <div className="note-card" onClick={onClick}>
      <button
        className="delete-btn"
        title="Delete"
        onClick={(e) => {
          e.stopPropagation();
          onDelete();
        }}
      >
        delete
      </button>

      
        <div className="note-card-title">{title}</div>
        <div className="note-card-text">{text}</div>
      </div>
    
  );
}

export default Note;
