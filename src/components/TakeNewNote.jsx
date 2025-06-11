export default function TakeNewNote({ onCreateNewNote }) {
  const handleClick = () => {
    const newNote = {
      id: Date.now(),  // Unique id
      title: "Enter title here...",
      text: "Start typing your note...",
      labels: []
    };
    onCreateNewNote(newNote);
  };

  return (
    <button className="take-new-note-btn" onClick={handleClick}>
      Take a new note
    </button>
  );
}
