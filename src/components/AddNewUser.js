import { useState } from "react";

import { UserInformation } from "./UserInformation";

export const AddNewUser = (props) => {
  const [age, setAge] = useState(null);
  const [newName, setNewName] = useState("");

  const { handleAddUser } = props;

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (age < 18) {
      alert("You are not old enough to be our employee");
    } else {
      alert("Submiting form for " + newName);
      const newUser = {
        name: newName,
        age: age,
      };
      handleAddUser(newUser);
    }
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div style={{ background: "#2ab92a", padding: 20 }}>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          onChange={handleNameChange}
          placeholder="Type your name"
        />
        <input
          type="number"
          onChange={handleAgeChange}
          placeholder="Type your age"
        />
        <button type="submit">Submit form</button>
      </form>
      <UserInformation age={age} />
    </div>
  );
};
