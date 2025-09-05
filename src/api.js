import axios from "axios";


const api = axios.create({
  baseURL: "https://notesappbackend-772e.onrender.com/notes", 

});

export default api;
