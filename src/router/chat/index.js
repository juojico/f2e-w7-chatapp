import React from "react";
import ChatArea from "../../component/ChatArea";
import { MOCK_CHATS } from "../../constant/chat";

const Chat = route => {
  const { type, chatId } = route.match.params;
  const goBack = () => {
    route.history.goBack();
  };
  const { title, subtitled, img, chats } = MOCK_CHATS[chatId];

  return (
    <ChatArea
      type={type}
      title={title}
      subtitled={subtitled}
      img={img}
      chats={chats}
      onClickBack={goBack}
    />
  );
};

export default Chat;
