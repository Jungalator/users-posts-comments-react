import { User } from "./User.jsx";
import Skeleton from "react-loading-skeleton";

export const Users = ({ usersData, handleSelectUser, isLoadingUsers }) => {
  return (
    <aside className="w-[22%] bg-white dark:bg-gray-800 overflow-y-scroll">
      <ul className=" p-3">
        {isLoadingUsers ? (
          <Skeleton
            count={10}
            width={"100%"}
            height={30}
            className="mb-3"
            baseColor="lightgray"
          />
        ) : (
          <li>
            <button
              id="all"
              onClick={handleSelectUser}
              className="user dark: dark-user"
            >
              All
            </button>
          </li>
        )}
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
    </aside>
  );
};
