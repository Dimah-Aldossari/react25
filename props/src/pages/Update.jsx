import { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function Update() {
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  const updateInfo = () => {
    axios
      .put(`https://66e7e69ab17821a9d9da6e9d.mockapi.io/logIn/${id}`, {
        post: name,
      })
      .then(() => {
        navigate("/info");
      });
  };
  return (
    <div>
      <input
        value={name}
        type="text"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button onClick={updateInfo}>update</button>
    </div>
  );
}

export default Update;
