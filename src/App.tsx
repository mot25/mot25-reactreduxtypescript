import React from "react";
import "./App.css";
import TodosList from "./components/todosList";
import UserList from "./components/UserList";

function App() {
  return <div className="App">
    <UserList/>
    <TodosList/>
    </div>;
}

export default App;
