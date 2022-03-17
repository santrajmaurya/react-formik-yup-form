import React from "react";

const UsersTable = ({ users }) => {
  return (
    <>
      <div className="row">
        <div className="col-lg-12 text-center">
          <h1>Users List</h1>
        </div>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Age</th>
            <th scope="col">Gender</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => (
            <tr key={Math.random()}>
              <th scope="row">{Math.floor(Math.random() * 100)}</th>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.age}</td>
              <td>{user.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default UsersTable;
