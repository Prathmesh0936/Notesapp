import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";
import '../Css/NotesList.css';

export default function NotesList() {
  const [notes, setNotes] = useState([]);
  const navigate = useNavigate(); 

  useEffect(() => {
    api.get("").then((res) => setNotes(res.data));
  }, []);

  const deleteNote = async (id) => {
    await api.delete(`/${id}`);
    setNotes(notes.filter((n) => n.id !== id));
  };

  return (
    <div className="notes-container">
      <h2> All Notes</h2>
      <table className="notes-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Content</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {notes.map((note) => (
            <tr key={note.id}>
              <td>{note.id}</td>
              <td>{note.title}</td>
              <td>{note.content}</td>
              <td>
                <button className="btn edit" onClick={() => navigate(`/edit/${note.id}`)}> Edit</button>
                <button className="btn delete" onClick={() => deleteNote(note.id)}> Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
