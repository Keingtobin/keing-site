import React, { useState } from 'react';
import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
} from "@chatscope/chat-ui-kit-react";
export class Chatbot extends React.Component{
  
  constructor(props){
    super(props);
    this.state = {
      messages: []
    }
    //bind onSend to onSend
    this.onSend = this.onSend.bind(this);
  }

  onSend(textContent){
    //generate send message for UI
    this.setState({
      messages: this.state.messages.concat([{message: textContent, direction: "outgoing"}])
    })
    //generate send message for openAI
    console.log(textContent);
  }

  render(){
    return (
    <div style={{ position: "relative", height: '92.75vh'}}>
        <MainContainer>
          <ChatContainer>
            <MessageList>
              {
                this.state.messages.map((item)=> (
                  <Message model={{message: item.message, direction: item.direction}}/>
                ))
              }
            </MessageList>
            <MessageInput onSend={(innerHTML,textContent,innerText,nodes)=> this.onSend(textContent)}placeholder="Type message here" />
          </ChatContainer>
        </MainContainer>
      </div>);
  }

};

