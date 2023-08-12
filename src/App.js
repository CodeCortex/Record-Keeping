import "./App.css";
import Header from "./components/Header";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import Fields from "./components/Fields";

function isValidEmail(email) {
  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function App() {
  const [form, setForm] = useState({ name: "", email: "" });
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  const addData = () => {
    if (form.name && form.email && isValidEmail(form.email)) {
      setData([...data, form]);
      setForm({ name: "", email: "" });
      setError("");
    } else {
      setError("Please enter a valid name and email!");
    }
  };

  const handleRemove = (index) => {
    let arr = data.slice();
    arr.splice(index, 1);
    setData(arr);
  };

  const handlePress = (event) => {
    if (event.key === "Enter") {
      addData();
    }
  };

  return (
    <div className="App">
      <Header />
      <div className="form">
        <Stack spacing={2} direction="row">
          <TextField
            onKeyDown={(event) => handlePress(event)}
            value={form.name}
            onChange={(event) => setForm({ ...form, name: event.target.value })}
            id="outlined-basic"
            label="name"
            variant="outlined"
            required
          />
          <TextField
            onKeyDown={(event) => handlePress(event)}
            type="email"
            value={form.email}
            onChange={(event) =>
              setForm({ ...form, email: event.target.value })
            }
            id="outlined-basic"
            label="email"
            variant="outlined"
            required
          />
          <Button
            draggable
            onDrag={() => console.log("Dragging...")}
            onClick={addData}
            color="success"
            variant="contained"
          >
            <AddIcon />
          </Button>
        </Stack>
        {error && <p className="error">{error}</p>}
      </div>
      <div className="data">
        <div className="data_val">
          <h4>Name</h4>
          <h4>Email</h4>
          <h4>Remove</h4>
        </div>
        {data.map((element, index) => {
          return (
            <Fields
              key={index}
              name={element.name}
              email={element.email}
              index={index}
              handleRemove={handleRemove}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
