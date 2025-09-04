import { useNavigate } from "react-router-dom";
import NoteForm from "../Components/NoteFrom";
import api from "../api";


export default function AddNote() {
  const navigate = useNavigate();

  const handleSubmit = async (note) => {
    await api.post("", note);
    navigate("/");
  };

  return (
    <div>
      <h2>Add Note</h2>
      <NoteForm onSubmit={handleSubmit} />
    </div>
  );
}
