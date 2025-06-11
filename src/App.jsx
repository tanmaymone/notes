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
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);

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

  const handleSearch = () => {
    setIsSearching(true);
  };

  const handleResetSearch = () => {
    setSearchQuery('');
    setIsSearching(false);
  };

  const filteredNotes = isSearching
    ? notes.filter(
        (note) =>
          note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          note.text.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : notes;

  return (
    <div className="app-container">
      <Header
        onCreateNewNote={openModal}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onSearch={handleSearch}
        onResetSearch={handleResetSearch}
      />
      <CollectionOfNotes
        notes={filteredNotes}
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
