import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Home() {
  const [post, setPost] = useState("");
  const navigate = useNavigate();
  const addPost = () => {
    axios.post("https://66e7e69ab17821a9d9da6e9d.mockapi.io/logIn", {
      post,
    });

    navigate("/info");
  };
  return (
    <div>
      <input
        type="text"
        value={post}
        onChange={(e) => {
          setPost(e.target.value);
        }}
      />
      <button onClick={addPost}>add</button>

      {/* {post} */}
    </div>
  );
}

export default Home;
