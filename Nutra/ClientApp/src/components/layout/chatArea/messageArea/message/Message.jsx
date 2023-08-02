import ListOfSuggestions from "./listOfSuggestions/ListOfSuggestions";
import ListOfFindings from "./listOfFindings/ListOfFindings";

export default function Message({ typeOfMessage }) {
  return (
    <div className="message">
      <ListOfSuggestions />
    </div>
  );

  // if (typeOfMessage === "messageOfSuggestions") {
  //   return (
  //     <div className="message-of-suggestions">

  //     </div>
  //   );
  // } else if (typeOfMessage === "messageOfFindings") {
  // } else if (typeOfMessage === "messageWithPhoto") {
  // }
}
