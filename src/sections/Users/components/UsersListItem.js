const UsersListItem = ({ user: { name, gender, email, picture } }) => {
  return (
    <li className={`${gender === 'male' ? 'bg-blue' : 'bg-pink'}`}>
      <img src={picture.medium} alt={`${name.first} ${name.last}`} />
      <h3>{`${name.first} ${name.last}`}</h3>
      <p>{`${email}`}</p>
    </li>
  );
};

export default UsersListItem;
