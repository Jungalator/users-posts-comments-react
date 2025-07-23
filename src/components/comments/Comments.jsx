import { Comment } from "./Comment";

export const Comments = ({
  comments,
  commentsIsVisible,
  isLoadingComments,
  handleVisibleComments,
  post,
}) => {
  return (
    <details onToggle={handleVisibleComments}>
      <summary className="text-neutral-500 cursor-pointer dark:text-blue-400 mb-3">
        Comments ↓
      </summary>

      {commentsIsVisible && (
        <ul className="shadow-lg  border-neutral-100 p-2.5 border-t-[1px] dark:border-blue-400">
          {isLoadingComments ? (
            <li className="text-neutral-600">Loading...</li>
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
