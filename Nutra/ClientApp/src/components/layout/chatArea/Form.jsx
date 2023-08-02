export default function Form() {
  return (
    <div className="form-container">
      <form
        id="submit-form"
        action="/profiles/new"
        method="POST"
        enctype="multipart/form-data"
      >
        <input id="upload" type="file" name="picture" />
        <label for="upload" class="custom-button">Append photo</label>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
