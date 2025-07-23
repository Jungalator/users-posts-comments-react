import { Comments } from "../comments/Comments";
export const Post = ({
  post,
  handleVisibleComments,
  isLoadingComments,
  commentsIsVisible,
  comments,
  user,
}) => {
  return (
    <li className="mb-5 shadow-lg dark:shadow-blue-400 border-none rounded-lg p-3">
      <h4 className="text-shadow-xs dark:text-shadow-blue-400 text-xl text-neutral-700 dark:text-blue-400 mb-3">
        {user.username}
      </h4>
      <h4 className=" mb-2 font-bold text-neutral-700 dark:text-white">
        {post.title}
      </h4>
      <p className="text-neutral-600 mb-2.5 dark:text-white">{post.body}</p>
      <Comments
        handleVisibleComments={handleVisibleComments}
        isLoadingComments={isLoadingComments}
        commentsIsVisible={commentsIsVisible}
        comments={comments}
        post={post}
      />
    </li>
  );
};
