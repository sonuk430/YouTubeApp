import React from "react";
import Avatar from "react-avatar";

const ChatMessage = ({ item }) => {
  return (
    <div className="flex items-center">
      <div>
        <Avatar
          src="https://yt3.ggpht.com/gzbnuS8RdpK2d-X3Kl5voU83McnlZpuIPm0UCGFss9iXxd0Vbv8p3qyIyyjCzNs-vJ67OsFuKw=s176-c-k-c0x00ffffff-no-rj"
          size={25}
          round={true}
        />
      </div>
      <div className="flex items-center">
        <h1 className="ml-2 font-bold text-sm">{item.name}</h1>
        <p className="ml-2 py-2 text-sm">{item.message}</p>
      </div>
    </div>
  );
};

export default ChatMessage;
