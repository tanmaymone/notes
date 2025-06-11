import { useEffect, useState } from "react";
import Header from "./components/Header";
import CollectionOfNotes from "./components/CollectionOfNotes";
import EditNote from "./components/EditNote";
import './App.css';

function App() {
  const [notes, setNotes] = useState(() => {
    const stored = localStorage.getItem("notes");
    return stored ? JSON.parse(stored) : [];
  });

  const [selectedNote, setSelectedNote] = useState(null);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const openModal = (note) => setSelectedNote(note);
  const closeModal = () => setSelectedNote(null);

  const handleSaveNote = (updatedNote) => {
    setNotes((prevNotes) => {
      const isNew = !prevNotes.some((n) => n.id === updatedNote.id);
      return isNew
        ? [...prevNotes, updatedNote]
        : prevNotes.map((n) => (n.id === updatedNote.id ? updatedNote : n));
    });
    closeModal();
  };

  const handleDeleteNote = (id) => {
    setNotes((prevNotes) => prevNotes.filter((n) => n.id !== id));
  };

  return (
    <div className="app-container">
      <Header onCreateNewNote={openModal} />
      <CollectionOfNotes
        notes={notes}
        openModal={openModal}
        onDeleteNote={handleDeleteNote}
      />
      {selectedNote && (
        <EditNote
          note={selectedNote}
          onClose={closeModal}
          onSave={handleSaveNote}
        />
      )}
    </div>
  );
}

export default App;
