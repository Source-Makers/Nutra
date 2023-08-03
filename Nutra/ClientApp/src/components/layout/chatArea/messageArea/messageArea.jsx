import ListOfSuggestions from "./listOfSuggestions/ListOfSuggestions";
import ListOfFindings from "./listOfFindings/ListOfFindings";
import MessageWithPhoto from "./messageWithPhoto";

export default function MessageArea({ lastPictureSent }) {
  return (
    <div className="message-area">
      <MessageWithPhoto sender="user" path={lastPictureSent} />
      {/* <ListOfSuggestions sender="bot" />
      <ListOfSuggestions sender="bot" />
      <ListOfSuggestions sender="bot" />
      <ListOfFindings sender="bot" />
      <MessageWithPhoto path="./photoesFromUser/1.jpg" sender="user" /> */}
    </div>
  );
}
