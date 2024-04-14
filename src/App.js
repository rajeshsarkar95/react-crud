import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navber from "./component/Navber";
import { useState } from "react";

function App(){
  const [task, setTaks] = useState([]);
  const [inputvalue, Setinputvalue] = useState("");
  const [items, setItems] = useState([]);

  const handlechange = (event) => {
    Setinputvalue(event.target.value);
  };

  const handlesubmit = (event) => {
    event.preventDefault();
    setTaks([...task, inputvalue]);
  };
  const handleDelete = (index)=>{
    console.log("hey i am working")
   const newTask = [...task];
   newTask.splice(index,1);
   setTaks(newTask)
  }
  const updateItem = (index, newValue) => {
    const newItems = [...items];
    newItems[index] = newValue;
    setItems(newItems); 
  }
  return (
    <>
      <Navber />
      <center>
        <div className=" border border-primar  .bg-light" style={{ width: "21rem" }}>
          <form onSubmit={handlesubmit}>
            <input
              className="m-4 border border-primary "
              type="text "
              placeholder="add youre tasks"
              onChange={handlechange}
              value={inputvalue}
            />
            <button type="submit" class="btn btn-primary ">
              Add
            </button>
          </form>
          <ul>
            {task.map((task, index) => (
              <li className="list-group-item border rounded" key={index}>
                {task}
                <button onClick={()=> handleDelete(index)} >delete</button>
                <button onChange={()=> updateItem}>edite</button>
              </li>
            ))}
          </ul>
        </div>
      </center>
    </>
  );
}
export default App;
