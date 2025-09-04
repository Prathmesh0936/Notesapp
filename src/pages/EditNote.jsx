import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import NoteForm from "../Components/NoteFrom";
import api from "../api";

export default function EditNote() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [note, setNote] = useState(null);

  useEffect(() => {
    api.get(`/${id}`).then((res) => setNote(res.data));
  }, [id]);

  const handleSubmit = async (updatedNote) => {
    await api.put(`/${id}`, updatedNote);
    navigate("/");
  };

  if (!note) return <p>Loading...</p>;

  return (
    <div>
      <h2>Edit Note</h2>
      <NoteForm onSubmit={handleSubmit} initialData={note} />
    </div>
  );
}
