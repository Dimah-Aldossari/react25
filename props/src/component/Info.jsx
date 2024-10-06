import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export default function Info() {
  const [task, setTask] = useState([]);
  console.log("render");

  useEffect(() => {
    getInfo();
  }, []);

  const getInfo = () => {
    axios
      .get(`https://66e7e69ab17821a9d9da6e9d.mockapi.io/logIn`)
      .then((res) => {
        // handle

        console.log(res.data);
        setTask(res.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  const deleteBtn = (id) => {
    axios
      .delete(`https://66e7e69ab17821a9d9da6e9d.mockapi.io/logIn/${id}`)
      .then(() => {
        // getInfo();
        setTask(task.filter((del) => del.id !== id));
      });
  };

  return (
    <div>
      <hr />

      <br />
      <ul>
        {task.map((item, index) => {
          return (
            <div key={index}>
              {item.post}
              <button
                onClick={() => {
                  deleteBtn(item.id);
                }}
              >
                delete
              </button>
              <Link to={`/update/${item.id}`}>
                <button>update</button>
              </Link>

              <Link to={`/about/${item.id}`}>
                <img style={{ width: "20%" }} src={item.image} />
              </Link>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
