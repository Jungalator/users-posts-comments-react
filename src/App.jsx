import { UserPostsComments } from "./pages/UserPostsComments";
import { Toaster } from "sonner";

function App() {
  return (
    <div className="w-[100%] h-[100%] min-h-[100vh] box-border">
      <Toaster richColors position="top-right" />
      <UserPostsComments />
    </div>
  );
}

export default App;
