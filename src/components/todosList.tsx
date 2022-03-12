import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchTodos, editPage } from "../store/action-creator/todo";
import { useTypedSector } from "./hooks/useTypedSelector";

const TodosList: FC = () => {
  const { todos, loading, limit, page, error } = useTypedSector(
    state => state.todos
  );
  const dispatch = useDispatch();

  useEffect(
    () => {
      dispatch(fetchTodos(page, limit));
    },
    [page]
  );

  if (loading) {
    return <h1>loading todos...</h1>;
  }
  if (error) {
    return <h1>error todos...</h1>;
  }
  const prevPage = () => {
    if (page > 0) {
      dispatch(editPage(page - 1));
    }
  };
  const nextPage = () => {
    dispatch(editPage(page + 1));
  };
  return (
    <div>
      <h1>TodosList</h1>
      {todos.map(todo =>
        <div key={todo.id} style={{ display: "block" }}>
          {todo.id}. {todo.title}
        </div>
      )}
      <div>
        <button onClick={() => prevPage()}>prev</button>
        {page}
        <button onClick={() => nextPage()}>next</button>
      </div>
    </div>
  );
};

export default TodosList;
