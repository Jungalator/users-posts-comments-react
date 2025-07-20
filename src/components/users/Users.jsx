import { User } from "./User.jsx";

export const Users = ({ usersData, handleSelectUser, isLoadingUsers }) => {
  return (
    <aside className="w-[22%] bg-white overflow-y-scroll">
      {isLoadingUsers ? (
        <p>Loading...</p>
      ) : (
        <ul className=" p-3">
          <li>
            <button id="all" onClick={handleSelectUser} className="user">
              All
            </button>
          </li>
          {usersData.map((user) => {
            return (
              <User
                user={user}
                key={user.id}
                handleSelectUser={handleSelectUser}
              />
            );
          })}
        </ul>
      )}
    </aside>
  );
};
