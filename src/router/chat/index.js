import React from "react";
import { MOCK_CHATS } from "../../constant/chat";
import ChatArea from "../../component/ChatArea";
import ChatBox from "../../component/ChatBox";

const chats = MOCK_CHATS;

const Chat = () => {
  return (
    <ChatArea title={"Free talk"} type={"bar"}>
      {chats.map(item => {
        return <ChatBox key={`chatBox${item.id}`} data={item} />;
      })}
    </ChatArea>
  );
};

export default Chat;
