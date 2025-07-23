import { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { Header } from "../components/Header/Header";
import { Users } from "../components/users/Users";
import { Posts } from "../components/posts/Posts";

export const UserPostsComments = () => {
  const [userId, setUserId] = useState("all");
  const [commentsIsVisible, setCommentsIsVisible] = useState(false);
  const [sendComment, setSendComment] = useState({
    title: "",
    body: "",
    postId: "",
  });
  const usersURL = "https://jsonplaceholder.typicode.com/users";
  const postsURL = "https://jsonplaceholder.typicode.com/posts";
  const commentsURL = "https://jsonplaceholder.typicode.com/comments";

  const [usersData, isLoadingUsers] = useFetch(usersURL);
  const [postsData, isLoadingPosts] = useFetch(postsURL);
  const [commentsData, isLoadingComments] = useFetch(commentsURL);

  const handleSelectUser = (e) => {
    setUserId(e.target.id);
  };

  const handleVisibleComments = () => {
    setCommentsIsVisible((prev) => !prev);
  };

  const toggleTheme = () => {
    const html = document.documentElement;
    html.classList.toggle("dark");
  };

  return (
    <div className="h-[100vh] bg-neutral-800">
      <Header toggleTheme={toggleTheme} />
      <main className="flex h-[90%] bg-blue-50 dark:bg-gray-900">
        <Users
          usersData={usersData}
          handleSelectUser={handleSelectUser}
          isLoadingUsers={isLoadingUsers}
        />

        <Posts
          users={usersData}
          posts={postsData}
          comments={commentsData}
          userId={userId}
          isLoadingPosts={isLoadingPosts}
          isLoadingComments={isLoadingComments}
          handleVisibleComments={handleVisibleComments}
          commentsIsVisible={commentsIsVisible}
        />
      </main>
    </div>
  );
};
