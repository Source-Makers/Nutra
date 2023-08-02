import ListOfSuggestions from "./listOfSuggestions/ListOfSuggestions";
import ListOfFindings from "./listOfFindings/ListOfFindings";
import MessageWithPhoto from "./messageWithPhoto";

export default function MessageArea() {
  return (
    <div className="message-area">
      <div className="bot-messages">
      <ListOfSuggestions />
      <ListOfSuggestions />
        <ListOfSuggestions />
        <ListOfFindings />
        <MessageWithPhoto path="./photoesFromUser/1.jpg" />
      </div>
      <div className="user-messages">
        <MessageWithPhoto path="./photoesFromUser/1.jpg" toHide={false} />
      </div>
    </div>
  );
}
