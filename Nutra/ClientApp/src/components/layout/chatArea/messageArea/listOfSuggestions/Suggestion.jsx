export default function Suggestion({ title, description, isSaved }) {
  return (
    <div className="suggestion">
      <span>{title}</span>

      <div>
        {isSaved ? (
          <>
            <button type="button" className="delete-button">
              x
            </button>
            <button type="button" className="learn-button">
              Learn
            </button>
          </>
        ) : (
          <>
            <button type="button">Add</button>
            <button type="button" className="learn-button">
              Learn
            </button>
          </>
        )}
      </div>
    </div>
  );
}
