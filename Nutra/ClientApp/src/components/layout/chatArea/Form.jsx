export default function Form({ handleSubmisson }) {
  return (
    <div className="form-container">
      <form
        id="submit-form"
        enctype="multipart/form-data"
        onSubmit={handleSubmisson}
      >
        <input id="upload" type="file" name="picture" />
        <label htmlFor="upload" className="custom-button">
          Append photo
        </label>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
