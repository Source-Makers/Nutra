import Finding from "./Finding";

export default function ListOfFindings({ sender }) {
  return (
    <div className={`list-of-findings-container ${sender}`}>
      <div>That's what I found:</div>
      <div className="list-of-findings">
        <Finding foodTitle="Beaf" />
        <Finding foodTitle="Pork" />
      </div>
      <button type="button" className="finding-confirmation-button">
        Correct
      </button>
    </div>
  );
}
