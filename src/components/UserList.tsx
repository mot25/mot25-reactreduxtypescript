import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../store/action-creator/user";
import { useTypedSector } from "./hooks/useTypedSelector";

const UserList = () => {
  const { users, error, loading } = useTypedSector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  if (loading) {
    return <h1>loading users...</h1>;
  }
  if (error) {
    return <h1>error users...</h1>;
  }

  return (
    <div>
      <h1>UserList</h1>

      <div>
        {users.map((user) => (
          <div key={user.id} style={{ display: "block" }}>
            {user.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
