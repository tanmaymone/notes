import React, { useState } from 'react';
import './EditNote.css';
import './EditNoteModal.css';

export default function EditNote({ note, onClose, onSave }) {
  // Local state for controlled inputs
  const [title, setTitle] = useState(note.title || "");
  const [text, setText] = useState(note.text || "");
  const placeholderBody = "Start typing your note...";
  const placeholderHeader = "Enter title here...";

  const handleSave = () => {
    const updatedNote = {
      ...note,
      title,
      text,
    };
    if(title !== placeholderHeader && text !== placeholderBody) {
      onSave(updatedNote);
    } 
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="edit-note-container">
          <textarea
            className="edit-note-header"
            placeholder={placeholderHeader}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onFocus={() => {
              if (title === placeholderHeader) setTitle("");
            }}
            rows={2}
          />

          <textarea
            className="edit-note-body"
            placeholder={placeholderBody}
            value={text}
            onChange={(e) => setText(e.target.value)}
            onFocus={() => {
              if (text === placeholderBody) setText("");
            }}
            rows={6}
          />

          <div className="edit-note-labels">
            {note.labels.map((label, index) => (
              <button key={index} className="edit-note-label">{label}</button>
            ))}
          </div>

          <button
            className="edit-note-close-btn"
            onClick={handleSave}
            disabled={!title.trim() && !text.trim()}
          >
            ✓
          </button>


        </div>
      </div>
    </div>
  );
}
