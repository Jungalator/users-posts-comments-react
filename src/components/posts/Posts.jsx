import { Post } from "./Post";

export const Posts = ({
  users,
  posts,
  comments,
  userId,
  handleVisibleComments,
  isLoadingPosts,
  isLoadingComments,
  commentsIsVisible,
}) => {
  return (
    <div className="w-[75%] overflow-y-scroll shadow-lg bg-white dark:bg-gray-800 mx-auto">
      {isLoadingPosts ? (
        <p>Loading...</p>
      ) : (
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
                <Post
                  post={post}
                  key={index}
                  handleVisibleComments={handleVisibleComments}
                  comments={comments}
                  isLoadingComments={isLoadingComments}
                  commentsIsVisible={commentsIsVisible}
                  user={user}
                />
              );
            })}
        </ul>
      )}
    </div>
  );
};
