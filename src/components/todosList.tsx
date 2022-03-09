import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchTodos } from "../store/action-creator/todo";
import { useTypedSector } from "./hooks/useTypedSelector";

const TodosList = () => {
  const { todos, loading, error } = useTypedSector((state) => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  if (loading) {
    return <h1>loading todos...</h1>;
  }
  if (error) {
    return <h1>error todos...</h1>;
  }
  return (
    <div>
      <h1>TodosList</h1>
      {todos.map((todo) => (
        <div key={todo.id} style={{ display: "block" }}>
          {todo.title}
        </div>
      ))}
    </div>
  );
};

export default TodosList;
