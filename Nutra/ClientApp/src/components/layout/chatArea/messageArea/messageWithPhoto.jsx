export default function MessageWithPhoto({ path, toHide = true }) {
  if (toHide) {
    return (
      <div className="message-with-photo toHide">
      </div>
    );
  }
  return (
    <div className="message-with-photo">
      <img
        src={require("./photoesFromUser/1.jpg")}
        alt="User photo"
        class="user-image"
      />
    </div>
  );
}
