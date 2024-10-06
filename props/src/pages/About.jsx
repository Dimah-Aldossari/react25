import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";

function About() {
  const [item, setItem] = useState("");
  let { id } = useParams();
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        // handle

        console.log(res.data);
        setItem(res.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);
  return (
    <div>
      {item.price}
      <br />
      {item.title}
    </div>
  );
}

export default About;
