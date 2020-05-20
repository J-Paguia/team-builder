import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import "./App.css";
import Form from './Form'

const presentTeamMember = [
  { id: uuid(), fname: "Austin", lname: "Lynes", email: "austin@lambda.com", role: "team lead" },
  { id: uuid(), fname: "Joseph", lname: "Paguia", email: "joseph@lambda.com", role: "frontend engineer" },
  { id: uuid(), fname: "Matthew", lname: "Heideman" , email: "matthew@lambda.com", role: "frontend engineer"},
  { id: uuid(), fname: "Simon", lname: "Huang" , email: "simon@lambda.com", role: "frontend engineer" },
  { id: uuid(), fname: "Troy", lname: "Schenumm", email: "troy@lambda.com", role: "frontend engineer" },
  { id: uuid(), fname: "Dakota ", lname: "Marcinak", email: "dakotah@lambda.com", role: "frontend engineer" },
  { id: uuid(), fname: "Vickie", lname: "Nelson", email: "vickie@lambda.com", role: "frontend engineer" },
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
