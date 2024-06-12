import React from 'react';
import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
} from "@chatscope/chat-ui-kit-react";

export const Chatbot = () =>{
    return (
    <div style={{ position: "relative", height: '92.75vh'}}>
        <MainContainer>
          <ChatContainer>
            <MessageList>
              <Message
                model={{
                  message: "Hello my friend",
                  sentTime: "just now",
                  sender: "Joe",
                }}
              />
              <Message
                model={{
                    message: "Boom boom",
                    sentTime: "just now",
                    sender: "Joe",
                }}
              />
              <Message
                model={{
                    message: "Boom boom",
                    sentTime: "just now",
                    sender: "Joe",
                }}
              />
              <Message
                model={{
                    message: "Boom boom",
                    sentTime: "just now",
                    sender: "Joe",
                }}
              />
              <Message
                model={{
                    message: "Boom boom",
                    sentTime: "just now",
                    sender: "Joe",
                }}
              />
              <Message
                model={{
                    message: "Boom boom",
                    sentTime: "just now",
                    sender: "Joe",
                }}
              />
              <Message
                model={{
                    message: "Boom boom",
                    sentTime: "just now",
                    sender: "Joe",
                }}
              />
              <Message
                model={{
                    message: "Boom boom",
                    sentTime: "just now",
                    sender: "Joe",
                }}
              />
              <Message
                model={{
                    message: "Boom boom",
                    sentTime: "just now",
                    sender: "Joe",
                }}
              />
              <Message
                model={{
                    message: "Boom boom",
                    sentTime: "just now",
                    sender: "Joe",
                }}
              />
              <Message
                model={{
                    message: "Boom boom",
                    sentTime: "just now",
                    sender: "Joe",
                }}
              />
              <Message
                model={{
                    message: "Boom boom",
                    sentTime: "just now",
                    sender: "Joe",
                }}
              />
              <Message
                model={{
                    message: "Boom boom",
                    sentTime: "just now",
                    sender: "Joe",
                }}
              />
              <Message
                model={{
                    message: "Boom boom",
                    sentTime: "just now",
                    sender: "Joe",
                }}
              />
              <Message
                model={{
                    message: "Boom boom",
                    sentTime: "just now",
                    sender: "Joe",
                }}
              />
              <Message
                model={{
                    message: "Boom boom",
                    sentTime: "just now",
                    sender: "Joe",
                }}
              />
              <Message
                model={{
                    message: "Boom boom",
                    sentTime: "just now",
                    sender: "Joe",
                }}
              />
              <Message
                model={{
                    message: "Boom boom",
                    sentTime: "just now",
                    sender: "Joe",
                }}
              />
              <Message
                model={{
                    message: "Boom boom",
                    sentTime: "just now",
                    sender: "Joe",
                }}
              />
              <Message
                model={{
                    message: "Boom boom",
                    sentTime: "just now",
                    sender: "Joe",
                }}
              />
              <Message
                model={{
                    message: "Boom boom",
                    sentTime: "just now",
                    sender: "Joe",
                }}
              />
              <Message
                model={{
                    message: "Boom boom",
                    sentTime: "just now",
                    sender: "Joe",
                }}
              />
              <Message
                model={{
                    message: "Boom boom",
                    sentTime: "just now",
                    sender: "Joe",
                }}
              />
              <Message
                model={{
                    message: "Boom boom",
                    sentTime: "just now",
                    sender: "Joe",
                }}
              />
              
            </MessageList>
            <MessageInput placeholder="Type message here" />
          </ChatContainer>
        </MainContainer>
      </div>)
};