import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import "./App.css";
import Form from './Form'

const presentTeamMember = [
  { id: uuid(), fname: "Ben", lname: "Berger", email: "ben@lambda.com", role: "team lead" },
  { id: uuid(), fname: "Joseph", lname: "Paguia", email: "joseph@lambda.com", role: "frontend engineer" },
  { id: uuid(), fname: "Alex", lname: "S" , email: "alex@lambda.com", role: "frontend engineer"},
  { id: uuid(), fname: "Emily", lname: "Low" , email: "emily@lambda.com", role: "frontend engineer" },
  { id: uuid(), fname: "Jack", lname: "Carpentier", email: "jack@lambda.com", role: "frontend engineer" },
  { id: uuid(), fname: "Jayvon", lname: "Harville", email: "jayvon@lambda.com", role: "frontend engineer" },
  { id: uuid(), fname: "Jonathan", lname: "Han", email: "jonathan@lambda.com", role: "frontend engineer" },
];

function App() {
  const [teamMember, setTeamMember] = useState(presentTeamMember);
  const [formValues, setFormValues] = useState({
    fname: "",
    lname: "",
    email: "",
    role: ""
  });
  



  const onInputChange = event => {

    const inputThatChanged = event.target.name;
    const newValueForInput = event.target.value;
    setFormValues({
      ...formValues,
      [inputThatChanged]: newValueForInput
    });
  };



  const onFormSubmit = event => {
    event.preventDefault();
    const newMember = {
      id: uuid(),
      fname: formValues.fname,
      lname: formValues.lname,
      email: formValues.email,
      role: formValues.role,
    };
    setTeamMember([...teamMember, newMember]);
  };

  return (
    <div className='App'>
      <h1>T e a m &nbsp; B u i l d e r</h1>;
      <Form
        onInputChange={onInputChange}
        formValues={formValues}
        onFormSubmit={onFormSubmit}
      />
      <h3>M e m b e r s</h3>
      {teamMember.map(fr => (
        <div key={fr.id}>
          {fr.fname} {fr.lname} {fr.email} {fr.role}
        </div>
      ))}
    </div>
  );
}


export default App;
