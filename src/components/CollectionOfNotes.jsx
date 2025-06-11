import Note from './Note';
import './CollectionOfNotes.css';

function CollectionOfNotes({ notes, openModal, onDeleteNote }) {
  return (
    <div className="notes-container">
      <div className="notes-grid">
        {notes.map((note) => (
          <Note
            key={note.id}
            title={note.title}
            text={note.text}
            labels={note.labels}
            onClick={() => openModal(note)}
            onDelete={() => onDeleteNote(note.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default CollectionOfNotes;
