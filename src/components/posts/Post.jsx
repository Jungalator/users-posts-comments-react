import Skeleton from "react-loading-skeleton";
import { Comments } from "../comments/Comments";
export const Post = ({
  post,
  toggleCommentsVisibility,
  isLoadingComments,
  showComments,
  comments,
  user,
}) => {
  return (
    <>
      {isLoadingComments ? (
        <div className="w-[80%] h-[20%] mb-4 mx-auto">
          <Skeleton
            className="mx-auto"
            count={4}
            width={"100%"}
            height={20}
            baseColor="lightgray"
          />
        </div>
      ) : (
        <li className="mb-5 shadow-lg dark:shadow-blue-400 border-none rounded-lg p-3">
          <h4 className="text-shadow-xs dark:text-shadow-blue-400 text-xl text-neutral-700 dark:text-blue-400 mb-3">
            {user.username}
          </h4>
          <h4 className=" mb-2 font-bold text-neutral-700 dark:text-white">
            {post.title}
          </h4>
          <p className="text-neutral-600 mb-2.5 dark:text-white">{post.body}</p>
          <Comments
            toggleCommentsVisibility={toggleCommentsVisibility}
            isLoadingComments={isLoadingComments}
            showComments={showComments}
            comments={comments}
            post={post}
          />
        </li>
      )}
    </>
  );
};
