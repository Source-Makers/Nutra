import ListOfSuggestions from "./listOfSuggestions/ListOfSuggestions";
import ListOfFindings from "./listOfFindings/ListOfFindings";
import MessageWithPhoto from "./messageWithPhoto";

export default function MessageArea() {
  return (
    <div className="message-area">
      <ListOfSuggestions sender="bot" />
      <ListOfFindings sender="bot" />
      <MessageWithPhoto path="./photoesFromUser/1.jpg" sender="bot" />

      <MessageWithPhoto path="./photoesFromUser/1.jpg" sender="user" />
      <ListOfSuggestions sender="user" />
      <ListOfFindings sender="user" />
    </div>
  );
}
