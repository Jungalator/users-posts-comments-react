import { useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { Header } from "../components/Header/Header";
import { Users } from "../components/users/Users";
import { Posts } from "../components/posts/Posts";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const UserPostsComments = () => {
  const [userId, setUserId] = useState("all");
  const [showComments, setShowComments] = useState({});
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
  const [localValue, setLocalValue] = useLocalStorage("theme", {
    theme: "",
    isChecked: false,
  });

  useEffect(() => {
    const html = document.documentElement;
    html.className = localValue.theme;
  }, [localValue.theme]);

  const handleSelectUser = (e) => {
    setUserId(e.target.id);
  };

  const toggleCommentsVisibility = (postId) => {
    setShowComments((prev) => ({
      ...prev,
      [postId]: !prev[postId],
    }));
  };

  const toggleTheme = (e) => {
    setLocalValue((prev) =>
      e.target.checked
        ? { ...prev, theme: "dark", isChecked: !false }
        : {
            ...prev,
            theme: "light",
            isChecked: false,
          }
    );
  };

  return (
    <div className="h-[100vh] bg-neutral-800">
      <Header toggleTheme={toggleTheme} localValue={localValue} />
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
          toggleCommentsVisibility={toggleCommentsVisibility}
          showComments={showComments}
        />
      </main>
    </div>
  );
};
