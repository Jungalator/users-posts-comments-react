import { Post } from "./Post";
import Skeleton from "react-loading-skeleton";

export const Posts = ({
  users,
  posts,
  comments,
  userId,
  toggleCommentsVisibility,
  isLoadingPosts,
  isLoadingComments,
  showComments,
}) => {
  return (
    <>
      <div className="w-[75%] overflow-y-scroll shadow-lg bg-white dark:bg-gray-800 mx-auto">
        <ul className="p-5 ">
          {posts
            .filter((post) => {
              if (post.userId === Number(userId)) return post;
              if (userId === "all") return true;
            })
            .map((post, index) => {
              const user = users.find((u) => u.id === post.userId);
              if (!user) return null;
              return (
                (isLoadingPosts && (
                  <div className="w-[80%] h-[20%] mb-4 mx-auto" key={index}>
                    <Skeleton
                      className="mx-auto"
                      count={4}
                      width={"100%"}
                      height={20}
                      baseColor="lightgray"
                    />
                  </div>
                )) || (
                  <Post
                    post={post}
                    key={index}
                    toggleCommentsVisibility={toggleCommentsVisibility}
                    comments={comments}
                    isLoadingComments={isLoadingComments}
                    showComments={showComments}
                    user={user}
                  />
                )
              );
            })}
        </ul>
      </div>
    </>
  );
};
