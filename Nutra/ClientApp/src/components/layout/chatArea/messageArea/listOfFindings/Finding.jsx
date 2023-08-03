export default function Finding({ foodTitle }) {
  return (
    <div className="finding">
      <input
        type="text"
        defaultValue={foodTitle}
        
      ></input>
      <button type="button" className="delete-button">
        x
      </button>
    </div>
  );
}
