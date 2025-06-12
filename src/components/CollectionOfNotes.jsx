import Note from './Note';
import './CollectionOfNotes.css';

function CollectionOfNotes({ notes, openModal, onDeleteNote }) {
  return (
    
    <div>
      <div className="collection-of-notes">
        {notes.map((note) => (
          <Note
            key={note.id}
            title={note.title}
            text={note.text}
            onClick={() => openModal(note)}
            onDelete={() => onDeleteNote(note.id)}
          />
        ))}
      </div>
      </div>
  );
}

export default CollectionOfNotes;
