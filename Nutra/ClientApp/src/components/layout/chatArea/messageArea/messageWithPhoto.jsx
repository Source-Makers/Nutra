export default function MessageWithPhoto({ path }) {
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
