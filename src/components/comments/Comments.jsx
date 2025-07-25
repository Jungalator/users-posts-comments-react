import { Comment } from "./Comment";
import Skeleton from "react-loading-skeleton";

export const Comments = ({
  comments,
  showComments,
  isLoadingComments,
  toggleCommentsVisibility,
  post,
}) => {
  return (
    <details
      onToggle={() => toggleCommentsVisibility(post.id)}
      className=" dark:hover:shadow-blue-400"
    >
      <summary className="inline-block text-neutral-500 hover:text-neutral-700 cursor-pointer dark:text-blue-400 dark:hover:text-blue-500 mb-3">
        {showComments[post.id] ? "Comments ▲" : "Comments ▼"}
      </summary>
      {showComments[post.id] && (
        <ul className="shadow-lg  border-neutral-100 p-2.5 border-t-[1px] dark:border-blue-400">
          {isLoadingComments ? (
            <Skeleton count={4} />
          ) : (
            comments
              .filter((comment) => comment.postId === post.id)
              .map(({ email, name, body, id }) => {
                return (
                  <Comment
                    email={email}
                    name={name}
                    body={body}
                    key={id}
                    isLoadingComments={isLoadingComments}
                  />
                );
              })
          )}
        </ul>
      )}
    </details>
  );
};
