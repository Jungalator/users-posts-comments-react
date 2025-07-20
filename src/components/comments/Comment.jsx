export const Comment = ({ email, name, body, isLoadingComments }) => {
  return (
    <>
      {isLoadingComments ? (
        <p>Loadin...</p>
      ) : (
        <li className="mb-2 p-2.5 border-[1px] border-neutral-200 rounded-md">
          <p className="text-sm mb-2 text-neutral-700">{email}</p>
          <p className="font-bold text-neutral-700 mb-2.5">{name}</p>
          <p className="text-neutral-600">{body}</p>
        </li>
      )}
    </>
  );
};
