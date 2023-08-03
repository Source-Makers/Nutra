import Suggestion from "./Suggestion";

export default function ListOfSuggestions({ sender }) {
  return (
    <div className={`list-of-suggestions-container ${sender}`}>
      <div>I suggest you recipes:</div>
      <div className="list-of-suggestions">
        <Suggestion title="Fried eggs and chicken" />
        <Suggestion title="Avocado with pineapple" />
      </div>
    </div>
  );
}
