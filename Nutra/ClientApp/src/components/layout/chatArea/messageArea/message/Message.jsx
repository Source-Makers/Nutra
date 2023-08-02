import ListOfSuggestions from "./listOfSuggestions/ListOfSuggestions";
import ListOfFindings from "./listOfFindings/ListOfFindings";

export default function Message({ typeOfMessage }) {
  if (typeOfMessage === "messageOfSuggestions") {
    return (
      <div className="message-of-suggestions">
        <div className="suggestions-area"></div>
        {/* <Suggestion title={"hi"} description={"bi"} /> */}
        {/* <Suggestion title={title} description={description} /> */}
      </div>
    );
  } else if (typeOfMessage === "messageOfFindings") {
  } else if (typeOfMessage === "messageWithPhoto") {
  }
}
