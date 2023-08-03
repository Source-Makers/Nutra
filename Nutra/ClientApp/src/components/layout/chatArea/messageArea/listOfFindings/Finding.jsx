export default function Finding({ foodTitle }) {
  return (
    <div className="finding">
      <span>{foodTitle}</span>
      <button type="button" className="delete-button">x</button>
    </div>
  );
}
