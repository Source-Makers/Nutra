import Form from "./Form";
import MessageArea from "./messageArea/messageArea";

export default function ChatArea() {
  return (
    <div className="chat-area">
      <MessageArea />
      <Form />
    </div>
  );
}
