export default function MessageWithPhoto({ path, sender }) {
  return (
    <div className={`message-with-photo ${sender}`}>
      <img src={path} alt="User photo" class="user-image" />
    </div>
  );
}
