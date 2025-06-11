// Note.jsx
import './Note.css';
import Labels from './Labels';

function Note({ title, text, labels, onClick, onDelete }) {
  return (
    <div className="note-card" onClick={onClick}>
      <button
        className="delete-btn"
        title="Delete"
        onClick={(e) => {
          e.stopPropagation(); // Prevent opening modal when delete is clicked
          onDelete();
        }}
      >
        delete
      </button>

      <div className="note-card-body">
        <div className="note-card-title">{title}</div>
        <div className="note-card-text">{text}</div>
        <Labels labels={labels} />
      </div>
    </div>
  );
}

export default Note;
