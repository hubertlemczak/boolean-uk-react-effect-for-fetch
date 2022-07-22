import { useEffect, useState } from 'react';
import UsersListItem from './UsersListItem';

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const api =
    'https://randomuser.me/api/?results=100&inc=gender,email,name,picture,id';
  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then((data) => setUsers(data.results));
  }, []);
  return (
    <ul className="users-list">
      {users.map((user, i) => (
        <UsersListItem key={i} user={user} />
      ))}
    </ul>
  );
};

export default UsersList;
