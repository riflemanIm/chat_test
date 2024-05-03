import React from 'react';
import { ChatIndex } from '@pmt/chat';
import { makeStyles } from '@mui/styles';
const useStyles = makeStyles((theme) => {
  return {
    container: {
      marginTop: 12,
      height: `calc(100vh - ${theme.spacing(2)})`,
      overflow: 'hidden',
    },
  };
});
/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling
const Chat = ({ lang, activeGroupId, activeChatUserId }) => {
  const classes = useStyles();
  const chatWsPath = '/socket.io';
  const chatWsUrl = 'wss://chat.mobimed.ru';
  const chatBaseURLApi = 'https://chat.mobimed.ru/';

  return (
    <div className={classes.container}>
      <ChatIndex
        lang={lang}
        chatBaseURLApi={chatBaseURLApi}
        chatWsUrl={chatWsUrl}
        chatWsPath={chatWsPath}
        activeGroupId={activeGroupId}
        activeChatUserId={activeChatUserId}
      />
    </div>
  );
};

export default Chat;
