import { Comment } from "../comments/Comment";

export const Post = ({
  post,
  handleVisibleComments,
  isLoadingComments,
  commentsIsVisible,
  comments,
  user,
}) => {
  return (
    <li className="mb-5 shadow-lg border-none rounded-lg p-3">
      <h4 className="text-shadow-md text-xl text-neutral-700 mb-3">
        {user.username}
      </h4>
      <h4 className=" mb-2 font-bold text-neutral-700 ">{post.title}</h4>
      <p className="text-neutral-600 mb-2.5">{post.body}</p>
      <details onClick={handleVisibleComments}>
        <summary className="text-neutral-500 cursor-pointer">Comments</summary>

        {commentsIsVisible && (
          <ul className="shadow-lg border-t-[1px] border-neutral-100 p-2.5">
            {comments
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
              })}
          </ul>
        )}
      </details>
    </li>
  );
};
