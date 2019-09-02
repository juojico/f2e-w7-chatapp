import React, { useState, useEffect } from "react";
import ChatArea from "../../component/ChatArea";
import { storedata, msgRef } from "../../action";
import { MOCK_CHATS } from "../../constant/chat";

const Chat = route => {
  const { type, chatId } = route.match.params;
  const [data, setData] = useState(MOCK_CHATS[chatId]);

  const onSend = payload => {
    storedata(payload, chatId);
  };

  useEffect(() => {
    msgRef.on("value", function(snapshot) {
      setData(snapshot.val()[chatId]);
    });
  }, []);

  const goBack = () => {
    route.history.goBack();
  };
  const { title, subtitled, img, chats } = data;

  return (
    <ChatArea
      type={type}
      title={title}
      subtitled={subtitled}
      img={img}
      chats={chats}
      onClickBack={goBack}
      onSend={onSend}
    />
  );
};

export default Chat;
