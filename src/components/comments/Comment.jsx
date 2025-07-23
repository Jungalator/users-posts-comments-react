import { memo } from "react";

export const Comment = memo(({ email, name, body }) => {
  return (
    <>
      <li className="mb-4 p-2.5 border-[1px] border-neutral-200 dark:border-blue-400 rounded-md">
        <p className="text-sm mb-2 text-neutral-700 dark:text-blue-400">
          {email}
        </p>
        <p className="font-bold text-neutral-700 mb-2.5 dark:text-white">
          {name}
        </p>
        <p className="text-neutral-600 dark:text-white">{body}</p>
      </li>
    </>
  );
});
