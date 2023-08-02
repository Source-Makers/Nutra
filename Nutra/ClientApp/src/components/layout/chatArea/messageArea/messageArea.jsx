import Message from "./message/Message";
// import Suggestion from "./message/listOfSuggestions/Suggestion";
import ListOfSuggestions from "./message/listOfSuggestions/ListOfSuggestions";

export default function MessageArea() {
  return (
    <div className="message-area">
      <div className="bot-messages"></div>
      <div className="user-messages">
        {/* <ListOfSuggestions /> */}
        <Message />
      </div>
    </div>
  );
}
