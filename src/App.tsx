import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNote, deleteNote } from './actions';
import './App.css';
import { NewNoteInput } from './newNoteInput';
import type { NotesState } from './notesReducer';

function App() {
  const notes = useSelector<NotesState, NotesState['notes']>(
    (state) => state.notes
  );

  const dispatch = useDispatch();

  const onAddNote = (note: string) => {
    dispatch(addNote(note));
  };

  const onDeleteNotes = (note: string) => {
    dispatch(deleteNote(note));
  };

  return (
    <div className="App-header">
      <NewNoteInput addNote={onAddNote} />
      {/* <hr /> */}
      <ul>
        {notes.map((note) => (
          <li onClick={() => onDeleteNotes(note)} key={note}>
            {note}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
