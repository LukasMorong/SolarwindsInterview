import { useEffect, useState } from "react";

import { Header } from "../components/Header";
import { AddNewUser } from "../components/AddNewUser";
import { UserList } from "../components/UserList";

export const UsersView = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users").then((rawData) => {
      rawData.json().then((parsedData) => {
        setUsers(parsedData);
      });
    });
  }, []);

  const handleAddUser = (userData) => {
    const { name, age } = userData;
    let newUsers = [...users, { name: name, age: age }];

    if (newUsers.length >= 2) {
      newUsers[newUsers.length - 2].name += " (*)"; // mark the previous employee
    }

    setUsers(newUsers);
  };

  return (
    <div>
      <Header users={users} />
      <AddNewUser handleAddUser={handleAddUser} />
      <UserList users={users} />
    </div>
  );
};
