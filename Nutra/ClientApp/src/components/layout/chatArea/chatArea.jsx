import { useState } from "react";
import Form from "./Form";
import MessageArea from "./messageArea/messageArea";

export default function ChatArea() {
  const [sentPicturePath, setSentPicturePath] = useState("");

  const handleFormSubmission = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    if (formData.get("picture").size === 0) return;

    const reader = new FileReader();
    reader.onload = () => {
      setSentPicturePath(reader.result);
    };

    reader.readAsDataURL(formData.get("picture"));

    // Далее можно выполнить дополнительные действия, например,
    // отправить данные на сервер

    // fetch("/profiles/new", {
    //   method: "POST",
    //   body: formData,
    // });

    event.target.reset();
  };

  return (
    <div className="chat-area">
      <MessageArea lastPictureSent={sentPicturePath} />
      <Form handleSubmisson={handleFormSubmission} />
    </div>
  );
}
