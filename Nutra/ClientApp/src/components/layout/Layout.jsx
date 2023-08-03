import Header from "./Header";
import LeftSidebar from "./leftSidebar/LeftSidebar";
import ChatArea from "./chatArea/chatArea";
import SavedRecipes from "./savedRecipes/SavedRecipes";
import "./style.css";

export default function Layout() {
  return (
    <div className="container">
      <Header />
      {/* <LeftSidebar /> */}
      <ChatArea />
      <SavedRecipes />
    </div>
  );
}
