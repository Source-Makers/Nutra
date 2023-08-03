export default function MessageWithPhoto({ path, sender }) {
  return (
    <div className={`message-with-photo ${sender}`}>
      <img
        src={require("./photoesFromUser/1.jpg")}
        alt="User photo"
        class="user-image"
      />
    </div>
  );
}
