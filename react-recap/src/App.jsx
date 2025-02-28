import { useNotes } from "./stores/store.js";

function App() {
  const { notes, addNote, removeNote, removeAllNotes, resetNotes, randomNumber } = useNotes();

  return (
    <>
      <h1>Hello</h1>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          addNote(e.target.note.value);
        }}
      >
        <input type="text" id="note" name="note" className="border" />
        <button type="submit" className="bg-green-500 text-white p-1 rounded">
          Add Note
        </button>
      </form>
      {notes.map((note) => (
        <div key={note}>
          <p>{note}</p>
          <button onClick={() => removeNote(note)} className="border rounded">
            Delete
          </button>
        </div>
      ))}
      <button className="bg-red-500 border-amber-400 rounded p-2" onClick={removeAllNotes}>Delete all notes</button>
      <button className="bg-blue-400 border rounded p-2" onClick={resetNotes}>Reset</button>
      <button onClick={() => console.log(randomNumber())}>Random number</button>
      <p>Randome Number: {randomNumber()}</p>
    </>
  );
}

export default App;
