import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import React, { useEffect, useState, useStyles } from "react";
export default function Student() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const handleClick = (e) => {
    e.preventDefault();
    const student = { name, address };
    console.log(student);
    fetch("http://localhost:8080/student/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(student),
    }).then(() => {
      console.log("New Student added");
    });
  };

  useEffect(() => {
    fetch("http://localhost:8080/student/getAll")
      .then((res) => res.json())
      .then((result) => {
        setStudents(result);
      });
  }, []);
  return (
    <>
      <TextField
        style={{ margin: "20px" }}
        id="outlined-basic"
        label="Student Name"
        variant="outlined"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        style={{ margin: "20px" }}
        id="outlined-basic"
        label="Student Address"
        variant="outlined"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <br></br>
      <Button
        onClick={handleClick}
        style={{
          margin: "20px",
          border: "1px solid blue",
          color: "white",
          backgroundColor: "blue",
        }}
      >
        Submit
      </Button>
    </>
  );
}
