import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NotesList from "./pages/NotesList";
import AddNote from "./pages/AddNote";
import EditNote from "./pages/EditNote";
import '../src/App.css';

export default function App() {
  return (
    <Router>
      <div className="p-4">
        <h1>Notes App</h1>
        <nav>
          <Link to="/">All Notes</Link> | <Link to="/add">Add Note</Link>
        </nav>
        <Routes>
          <Route path="/" element={<NotesList />} />
          <Route path="/add" element={<AddNote />} />
          <Route path="/edit/:id" element={<EditNote />} />
        </Routes>
      </div>
    </Router>
  );
}
