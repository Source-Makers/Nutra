import LeftSidebar from "./leftSidebar/LeftSidebar";
import ChatArea from "./chatArea/chatArea";
import "./style.css";

export default function Layout() {
  return (
    <div className="container">
      <LeftSidebar />
      <ChatArea />
    </div>
  );
}
