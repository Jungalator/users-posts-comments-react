export const User = ({ user, handleSelectUser }) => {
  return (
    <>
      <li>
        <button id={user.id} onClick={handleSelectUser} className="user">
          {user.username}
        </button>
      </li>
    </>
  );
};
